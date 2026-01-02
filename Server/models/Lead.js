import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: String,
  time: String,
  place: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

// ✅ SAFE EXPORT (prevents overwrite error)
export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);
