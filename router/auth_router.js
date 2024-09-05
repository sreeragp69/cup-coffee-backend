const express = require('express')
const authControllers = require('../controllers/auth_controller')
const router = express.Router()

const {signupSchema ,logInSchema} = require('../validators/auth_validator')
const authMiddleware = require("../middlewares/auth_middleware")
const validate = require('../middlewares/validate-middleware')


router.route("/").get(authControllers.Home)
router.route("/register").post( validate(signupSchema), authControllers.Register)
router.route("/login").post(validate(logInSchema) ,  authControllers.Login)
router.route("/user").get( authMiddleware, authControllers.user)


module.exports = router