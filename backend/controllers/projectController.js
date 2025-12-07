const Project = require("../models/Project");

exports.addProject = async (req, res) => {
  try {
    // Print the data received from Thunder Client
    console.log("Incoming project:", req.body);

    // Try saving it to MongoDB
    const saved = await Project.create(req.body);

    // Print what MongoDB actually saved
    console.log("Saved project:", saved);

    res.json({ success: true });
  } catch (err) {
    // Print full error details
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
