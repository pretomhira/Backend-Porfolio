const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const portfolioSchema = require("../schemas/portfolioSchema");
const userInfoDocument = new mongoose.model(
  "userInfoDocument",
  portfolioSchema.userInfoSchema
);
const indentityInfoDocument = new mongoose.model(
  "indentityInfoDocument",
  portfolioSchema.identityInfoSchema
);

router.get("/", async (req, res) => {
  res.send("New home");
});
router.get("/userInfo", async (req, res) => {
  res.send("userInfo");
});
router.get("/skills", async (req, res) => {
  res.send("skills");
});
router.get("/identityInfo", async (req, res) => {
  res.send("identity");
});
router.get("/contactInfo", async (req, res) => {
  res.send("contacts");
});

router.post("/userInfo", async (req, res) => {
  const newInfo = new userInfoDocument(req.body);
  try {
    const result = await newInfo.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
router.post("/identityInfo", async (req, res) => {
  const newInfo = new indentityInfoDocument(req.body);
  try {
    const result = await newInfo.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
