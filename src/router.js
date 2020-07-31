const router = require("express").Router();

const HomeController = require("./controllers/HomeController");
const FamiliaController = require("./controllers/FamiliaController");

router.get("/familia", FamiliaController.index);
router.get("/familia/form", FamiliaController.renderFormAdd);




router.get("/", HomeController.index);

module.exports = router;
