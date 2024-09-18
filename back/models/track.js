const mongoose = require("mongoose");

const trackSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "plese provide the title for the track"],
  },
  artistName: {
    type: String,
    required: [true, "please provide the artist for the track"],
  },
  genere: {
    type: String,
  },
  releseDate: {
    type: Date,
  },
  liked: {
    type: Boolean,
  },
  type: {
    type: String,
    // enum: {
    //   values: ["single","album"],
    //   message: "{VALUE} is not supported",
    // },
    default: "single",
  },
  albumId: {
    type: mongoose.Types.ObjectId,
    ref: "album",
  },
  cover: {
    type: String,
  },
});

module.exports = mongoose.model("track", trackSchema);
