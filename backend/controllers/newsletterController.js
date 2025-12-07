const Lead = require("../models/Lead");

exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: "Email is required" });

    await Lead.create({
      email,
      source: "newsletter",
    });

    return res.json({ success: true, message: "Subscribed successfully!" });

  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
