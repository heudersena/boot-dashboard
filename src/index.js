const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const router = require("./router");
console.log(path.resolve(__dirname, "..", "src", "views"));
nunjucks.configure(path.resolve(__dirname, "..", "src", "views"), {
  express: app,
  noCache: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(3002, () => console.log(`servidor está on`));
