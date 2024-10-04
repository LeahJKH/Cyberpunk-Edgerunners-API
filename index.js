const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import the cors package

const app = express();

// Use CORS middleware
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Read JSON files
const episodes = JSON.parse(fs.readFileSync(path.join(__dirname, "json/episodes.json"), "utf-8"));
const char = JSON.parse(fs.readFileSync(path.join(__dirname, "json/characters.json"), "utf-8"));

// Create GET requests
app.get("/", (req, res) => {
  res.send("");
});

// Get json files
app.get("/ep", (req, res) => {
  res.json(episodes);
});
app.get("/char", (req, res) => {
  res.json(char);
});
// Get json files

// Initialize server
app.listen(8001, () => {
  console.log("Running on port 8001.");
});

module.exports = app;