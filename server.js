const express = require("express");
const nunjucks = require("nunjucks");
const revenuesData = require("./data");

const server = express();

server.use(express.static("public"));
server.use(express.static("assets"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.render("index", {items: revenuesData});
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/revenues", function(req, res){
  return res.render("revenues", {items: revenuesData});
});

server.get("/revenues/:index", function (req, res) {
  const revenues = [...revenuesData];

  const revenueIndex = req.params.index;

  const revenue = revenues[revenueIndex]

  return res.render("revenue", {item: revenue});
});

server.use(function (req, res) {
  return res.status(404).render("not-found");
});

server.listen(3333, function () {
  console.log("Server is running!");
});
