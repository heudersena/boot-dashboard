class HomeController {
  index(req, res) {
    res.render("familia/index.html");
  }

  renderFormAdd(req, res) {
    res.render("familia/formAddFamilia.html");
  }
}

module.exports = new HomeController();
