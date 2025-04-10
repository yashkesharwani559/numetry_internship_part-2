import Video from '../models/Video.js';

// Upload a new video
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoUrl, thumbnailUrl, duration, category, tags } = req.body;
    const userId = req.user.id; // From auth middleware

    const video = new Video({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      duration,
      category,
      tags,
      userId
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all videos with pagination
export const getAllVideos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const videos = await Video.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('userId', 'username');

    const total = await Video.countDocuments();

    res.json({
      videos,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalVideos: total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get video by ID
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate('userId', 'username')
      .populate('comments.userId', 'username');

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Increment views
    video.views += 1;
    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video
    if (video.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this video' });
    }

    Object.assign(video, req.body);
    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete video
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video
    if (video.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this video' });
    }

    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add comment to video
export const addComment = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    video.comments.push({
      userId: req.user.id,
      text: req.body.text
    });

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Like/Unlike video
export const toggleLike = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    const likeIndex = video.likes.indexOf(req.user.id);
    if (likeIndex === -1) {
      video.likes.push(req.user.id);
      // Remove from dislikes if exists
      const dislikeIndex = video.dislikes.indexOf(req.user.id);
      if (dislikeIndex !== -1) {
        video.dislikes.splice(dislikeIndex, 1);
      }
    } else {
      video.likes.splice(likeIndex, 1);
    }

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 