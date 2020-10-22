const express = require("express");
const nunjucks = require("nunjucks");
const revenues = require("./data");

const server = express();

server.use(express.static("public"));
server.use(express.static("assets"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("index", {items: revenues});
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/revenue", function(req, res){
  return res.render("revenue", {items: revenues})
});

server.get("/revenues", function (req, res) {
  return res.render("revenues", {items: revenues});
});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Server is running!");
});
