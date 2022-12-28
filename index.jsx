const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//mongodb crud operations start
//dbName: tmSystem
//dbPasseord: evxGZ5W1mvyK5piZ

const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://tmSystem:evxGZ5W1mvyK5piZ@<cluster-url>?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const usersCollection = client.db("tmSystem").collection("tmUsers");

    // Query for a movie that has the title 'Back to the Future'
    app.get("/users", async (req, res) => {});
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
  }
}
run();

//mondodb crud end

app.get("/", (req, res) => {
  res.send(`Your app is running on port Prefectly`);
});

app.listen(port, () => {
  console.log(`my task management server is running on port ${port}`);
});
