const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("home", { user: req.session.user });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("login");
});

module.exports = router;
