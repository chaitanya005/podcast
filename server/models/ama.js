const mongoose = require("mongoose");

const AmaSchema = mongoose.Schema({
  embeddedlink: {
    type: String,
    required: true,
  },
  routename: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ama", AmaSchema);
