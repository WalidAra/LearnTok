const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["system", "like", "comment"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  notifications: [notificationSchema],
});

const Note = mongoose.model("Note", userSchema);

module.exports = Note;
