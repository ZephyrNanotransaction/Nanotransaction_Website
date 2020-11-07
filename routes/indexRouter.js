const express = require("express");

// new router will handle all request to /
const router = express.Router();
const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales. Nunc sed id semper risus. Imperdiet sed euismod nisi porta lorem mollis aliquam. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Quisque egestas diam in arcu cursus euismod quis. Volutpat odio facilisis mauris sit amet massa vitae. Id velit ut tortor pretium viverra."

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
    comp: {image_pos: "left", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]},
    comp2: {image_pos: "right", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]}
  });
});

// investor page route
router.get("/investor", (req, res, next) => {
  res.status(200).render("investor", {
    css: ["email_form.css", "entity.css"],
    js: [],
    investor: "selected",
    comp: {image_pos: "left", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]},
    comp2: {image_pos: "right", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]}
  });
});

// user page route
router.get("/consumer", (req, res, next) => {
  res.status(200).render("consumer", {
    css: ["email_form.css", "entity.css"],
    js: [],
    consumer: "selected",
    comp: {image_pos: "left", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]},
    comp2: {image_pos: "right", image: "https://dummyimage.com/360x360/fff/aaa", title: "Test Title", paragraph: [dummy_text, dummy_text, dummy_text]}
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
