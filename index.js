require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const portfolioHandler = require("./routeHandler/portfolioInfoHandler");
const app = express();

app.use(express.json());

async function main() {
  await mongoose.connect(process.env.DB_URI);
}

main().catch((err) => console.log(err));

app.use("/", portfolioHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`myapp app listening on port ${port}`);
});
