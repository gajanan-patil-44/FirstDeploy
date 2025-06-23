const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.prompt;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await aiService(code);
    res.send(response);
  } catch (err) {
    console.error("❌ Error in getResponse:", err);
    res.status(500).send("Internal Server Error: " + err.message);
  }
};

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Code is required");
  }

  try {
    const response = await aiService(code);
    res.send(response);
  } catch (err) {
    console.error("❌ Error in getReview:", err);
    res.status(500).send("Internal Server Error: " + err.message);
  }
};
