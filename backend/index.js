require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());
require("./database/database").connect();

const cors = require("cors");
app.use(cors());

const customers = require("./routes/customer");





// Register routes
console.log("Step 1")

app.use("/", customers);


// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
