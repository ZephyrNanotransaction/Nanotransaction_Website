const express = require("express");

// new router will handle all request to /
const router = express.Router();

// home page route
router.get("/", (req, res, next) => {
  res.status(200).render("home", {
    css: ["home.css"],
    js: [],
  });
});

// business page route
// user page route
router.get("/business", (req, res, next) => {
  res.status(200).render("business", {
    css: ["email_form.css", "entity.css"],
    js: [],
    business: "selected",
  });
});

// investor page route
router.get("/investor", (req, res, next) => {
  res.status(200).render("investor", {
    css: ["email_form.css", "entity.css"],
    js: [],
    investor: "selected",
  });
});

// user page route
router.get("/consumer", (req, res, next) => {
  res.status(200).render("consumer", {
    css: ["email_form.css", "entity.css"],
    js: [],
    consumer: "selected",
  });
});

// team page route
router.get("/team", (req, res, next) => {
  res.status(200).render("team", {
    css: ["team.css"],
    js: ["email.js"],
  });
});

// demo page route
router.get("/demo", (req, res, next) => {
  res.status(200).render("demo");
});

module.exports = router;
