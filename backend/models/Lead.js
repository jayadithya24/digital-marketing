const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  service: String,
  message: { type: String, required: true },
  source: { type: String, default: "contact-form" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Lead", LeadSchema);
