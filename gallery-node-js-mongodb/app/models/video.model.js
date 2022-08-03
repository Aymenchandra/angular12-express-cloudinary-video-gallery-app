const mongoose = require("mongoose");

const Video = mongoose.model(
  "Video",
  new mongoose.Schema({
    title: String,
    description: String,
    source: String,
    state:Boolean,
    comment:String
  })
);

module.exports = Video;
