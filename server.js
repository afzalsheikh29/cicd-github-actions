const path = require("path");
const express = require("express");
const app = express();

// App config
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Simple API route (used by frontend)
app.get("/api/info", (req, res) => {
  res.json({
    appName: "Node.js CI/CD App",
    message: "This app is built on Node.js, Docker, and GitHub Actions.",
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
  });
});

// Healthcheck route (good for monitoring)
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// Fallback: serve index.html for root (optional, but nice)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
