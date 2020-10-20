const express = require("express");
const db = require("../db/nedb");

// new router will handle all request to /
const router = express.Router();

// handle email form submit
router.post("/add", async (req, res, next) => {
  const { user } = req.body;

  try {
    await db.addContact(user);
    res.send({ wasSuccess: true });
  } catch (err) {
    res.send({ wasSuccess: false });
  }
});

module.exports = router;
