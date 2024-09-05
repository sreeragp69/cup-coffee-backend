const express = require("express");
const adminController = require("../controllers/admin_controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth_middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

//
//* GET ALL USERS
router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.GetAllUsers);

//
//* GET SINGLE USER
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.GetUserBYId);

//
//*  UPDATE USER
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.UpdateUserById);

//
//*  GET ALL CONTACTS
router
  .route("/contacts")
  .get(authMiddleware, adminMiddleware, adminController.GetAllContacts);

//
//* DELETE USER
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);


//* DELETE CONTACTS

router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteContactsById);


module.exports = router;
