const mongoose = require("mongoose");

const albumSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "plese provide the title for the album"],
    unique: true,
  },
  artistName: {
    type: String,
    required: [true, "please provide the artist for the album"],
  },
  genere: {
    type: String,
  },
  releseDate: {
    type: Date,
  },
  cover: {
    type: String,
  },
});

module.exports = mongoose.model("album", albumSchema);
