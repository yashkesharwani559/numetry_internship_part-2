import express from 'express';
import { uploadVideo, getAllVideos, getVideoById, updateVideo, deleteVideo, addComment, toggleLike } from '../controllers/videoController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllVideos);
router.get('/:id', getVideoById);

// Protected routes (require authentication)
router.post('/', auth, uploadVideo);
router.put('/:id', auth, updateVideo);
router.delete('/:id', auth, deleteVideo);
router.post('/:id/comments', auth, addComment);
router.post('/:id/like', auth, toggleLike);

export { router as default }; 