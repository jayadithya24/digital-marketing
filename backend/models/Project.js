const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  budget: Number,
  client: String,
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
