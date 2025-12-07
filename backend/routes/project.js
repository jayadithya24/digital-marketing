const express = require("express");
const router = express.Router();

const { addProject } = require("../controllers/projectController");

// All POST requests go to the controller
router.post("/", addProject);

module.exports = router;
