import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  history: [String],
  playlists: [{ name: String, videos: [String] }]
});
export default mongoose.model('User', userSchema);
