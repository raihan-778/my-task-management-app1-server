const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Your app is running on port Prefectly`);
});

app.listen(port, () => {
  console.log(`my task management server is running on port ${port}`);
});
