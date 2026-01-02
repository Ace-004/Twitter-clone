import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    bio: { type: String, default: "" },
    website: { type: String, default: "" },
    location: { type: String, default: "" },
    joinedDate: { type: Date, default: Date.now }, 
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
export default User;
