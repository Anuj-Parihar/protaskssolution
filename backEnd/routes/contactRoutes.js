const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Handle Form Submission
router.post("/", async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, service, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// Fetch all responses
router.get("/", async (req, res) => {
    try {
      const responses = await Contact.find().sort({ createdAt: -1 });
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  

module.exports = router;
