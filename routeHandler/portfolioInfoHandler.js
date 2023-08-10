const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const portfolioSchema = require("../schemas/portfolioSchema");
const userInfoDocument = new mongoose.model(
  "userInfoDocument",
  portfolioSchema.userInfoSchema
);

const skillInfoDocument = new mongoose.model(
  "skillInfoDocument",
  portfolioSchema.skillsSchema
);
const indentityInfoDocument = new mongoose.model(
  "indentityInfoDocument",
  portfolioSchema.identityInfoSchema
);
const contactInfoDocument = new mongoose.model(
  "contactInfoDocument",
  portfolioSchema.contactInfoSchema
);

router.get("/", async (req, res) => {
  res.send("Home");
});
router.get("/userInfo", async (req, res) => {
  try {
    const result = await userInfoDocument.findOne({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
router.get("/skills", async (req, res) => {
  try {
    const result = await skillInfoDocument.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});
router.get("/identityInfo", async (req, res) => {
  try {
    const result = await indentityInfoDocument.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.get("/contactInfo", async (req, res) => {
  try {
    const result = await contactInfoDocument.find({});
    res.send(result);
  } catch (error) {
    res.send(error);
  }
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

router.post("/skills", async (req, res) => {
  const newInfo = new skillInfoDocument(req.body);
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
router.post("/contactInfo", async (req, res) => {
  const newInfo = new contactInfoDocument(req.body);
  try {
    const result = await newInfo.save();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
