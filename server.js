const express = require("express");
const nunjucks = require("nunjucks");
const revenues = require("./data");

const server = express();

server.use(express.static("public"));
server.use(express.static("assets"));

server.set("view engine", "html");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("index");
});

server.get("/about.html", function (req, res) {
  return res.render("about");
});

server.get("/revenue.html", function (req, res) {
  return res.render("revenue");
});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Server is running!");
});
