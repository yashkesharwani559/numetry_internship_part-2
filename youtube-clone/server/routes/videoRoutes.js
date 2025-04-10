import express from 'express';
import Video from '../models/Video.js';
import User from '../models/User.js';
const router = express.Router();

// Upload video
router.post('/upload', async (req, res) => {
  const { title, description, url, thumbnail, topic, uploadedBy } = req.body;
  const video = new Video({ title, description, url, thumbnail, topic, uploadedBy });
  await video.save();
  res.send('Video uploaded successfully');
});

// Get all videos
router.get('/all', async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// Filter by topic
router.get('/filter/:topic', async (req, res) => {
  const { topic } = req.params;
  const videos = await Video.find({ topic });
  res.json(videos);
});

// Add to history
router.post('/add-history', async (req, res) => {
  const { userId, videoId } = req.body;
  await User.findByIdAndUpdate(userId, { $addToSet: { history: videoId } });
  res.send('Added to history');
});

// Get user history
router.get('/history/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate('history');
  res.json(user.history);
});

// Add to playlist
router.post('/add-playlist', async (req, res) => {
  const { userId, playlistName, videoId } = req.body;
  const user = await User.findById(userId);
  let playlist = user.playlists.find(p => p.name === playlistName);
  if (playlist) {
    playlist.videos.push(videoId);
  } else {
    user.playlists.push({ name: playlistName, videos: [videoId] });
  }
  await user.save();
  res.send('Video added to playlist');
});

// Get all playlists
router.get('/playlists/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.json(user.playlists);
});

export default router;
