const express = require("express");
const mongoose = require("mongoose");
const portfolioHandler = require("./routeHandler/portfolioInfoHandler");
const app = express();

app.use(express.json());

async function main() {
  await mongoose.connect(
    "mongodb+srv://freelancerpretomhir:4c9SOuYWomu7VL3B@cluster0.dpnvtax.mongodb.net/portfolioInfo"
  );
}

main().catch((err) => console.log(err));

app.use("/", portfolioHandler);

const port = 3020;

app.listen(port, () => {
  console.log(`myapp app listening on port ${port}`);
});
