import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  thumbnail: String,
  topic: String,
  uploadedBy: String
});
export default mongoose.model('Video', videoSchema);
