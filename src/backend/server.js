// 

import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/generate", upload.single("image"), async (req, res) => {
  try {
    console.log(" BODY:", req.body);

    const prompt = req.body?.prompt || "";
    const category = req.body?.category || "";
    const instruction = req.body?.instruction || "";

    const fullPrompt = `
Create a professional product photography scene description.

Instruction: ${instruction}
Category: ${category}
Details: ${prompt}

Make it detailed, realistic and visually appealing.
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: fullPrompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(" GEMINI:", JSON.stringify(data, null, 2));

    // SAFE extraction
    let result = "";

    if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts;

      for (let p of parts) {
        if (p.text) {
          result += p.text;
        }
      }
    }

    res.json({
      text: result || "No response from Gemini",
    });

  } catch (err) {
    console.error("💥 ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));