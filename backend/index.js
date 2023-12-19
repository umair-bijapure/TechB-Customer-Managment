require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());
require("./database/database").connect();

const cors = require("cors");
app.use(cors());

const customers = require("./routes/customer");

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to TechB-TNGL');
  });

// Register routes
console.log("Step 1")

app.use("/api/user", customers);
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
