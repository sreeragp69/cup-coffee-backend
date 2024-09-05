const express = require("express");
const contactForm = require("../controllers/contact_controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact_validator");
const router = express.Router();

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;
