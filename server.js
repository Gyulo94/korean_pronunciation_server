const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, OPEN_API_KEY, OPEN_API_URL } = require("./common");
app.use(cors());
app.use(express.json({ limit: "2gb" }));
app.use(express.urlencoded({ limit: "2gb", extended: true }));

app.post("/api/pronunce/korean", async (req, res) => {
  const requestBody = req.body;
  try {
    const response = await axios.post(OPEN_API_URL, requestBody, {
      headers: {
        Authorization: OPEN_API_KEY,
      },
    });
    return res.json(response.data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
