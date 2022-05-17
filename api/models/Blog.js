const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "lightgreen",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blogs", BlogSchema);
