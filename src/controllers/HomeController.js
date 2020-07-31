class HomeController {
  index(req, res) {
    res.send({ message: "HomeController" });
  }
}

module.exports = new HomeController();
