const Contact = require("../models/contact_model");
const User = require("../models/user_model");

//* --------------
//* GET ALL USERS
//* --------------

const GetAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
   a

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }

    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

//* --------------
//* GET ALL CONTACTS
//* --------------

const GetAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }

    return res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

//* --------------
//* DELETE CONTACT
//* --------------

const deleteContactsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedContact = await Contact.deleteOne({ _id: id });

    if (deletedContact.deletedCount === 0) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact Deleted" });
  } catch (error) {
    next(error);
  }
};


//* --------------
//* DELETE USER
//* --------------

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    next(error);
  }
};

//* --------------
//* GET SINGLE USER
//* --------------

const GetUserBYId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//* --------------
//* USER UPDATE
//* --------------

const UpdateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updateData = await User.updateOne(
      { _id: id },
      {
        $set: updateUserData,
      }
    );

    return res.status(200).json(updateData);
  } catch (error) {
    next(error);
  }
  a;
};

module.exports = {
  GetAllUsers,
  GetAllContacts,
  deleteUserById,
  GetUserBYId,
  UpdateUserById,
  deleteContactsById,
};
