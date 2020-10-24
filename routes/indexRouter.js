const express = require("express");

// new router will handle all request to /
const router = express.Router();

// home page route
router.get("/", (req, res, next) => {
  res.status(200).render("home", {
    css: ["home.css"],
    js: ["email.js"],
  });
});

// business page route
router.get("/business", (req, res, next) => {
  res.status(200).render("business");
});

// investor page route
router.get("/investor", (req, res, next) => {
  res.status(200).render("investor", {
    css: ["email_form.css"],
    js: ["email.js"],
  });
});

// user page route
router.get("/consumer", (req, res, next) => {
  res.status(200).render("consumer");
});

// team page route
router.get("/team", (req, res, next) => {
  res.status(200).render("team");
});

// demo page route
router.get("/demo", (req, res, next) => {
  res.status(200).render("demo");
});

module.exports = router;
