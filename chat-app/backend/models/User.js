import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
