const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = 8000;
require("dotenv").config();
app.use(cors());
app.use(express.json());

const openApiURL = "http://aiopen.etri.re.kr:8000/WiseASR/PronunciationKor"; //한국어

app.post("/api/request-pronunce", async (req, res) => {
  const requestBody = req.body;
  try {
    const response = await axios.post(openApiURL, requestBody, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: process.env.OPEN_API_KEY,
      },
    });
    return res.json(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
