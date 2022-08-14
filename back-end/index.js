require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("attendance management running the server");
});

app.listen(port, () => {
  console.log(`attendance management app listening on port ${port}`);
});

async function run() {
  try {
    const uri = `${process.env.URI_DB}`;
    const client = new MongoClient(uri);
    await client.connect();
    console.log("connected");
    const database = client.db("attendance-info").collection("fakeDataChartjs");
    app.get("/fakeData", async (req, res) => {
        const { value } = req.query;
        const result = await database.find({}, { projection: {_id:0, [value]: 1} }).toArray();
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);
