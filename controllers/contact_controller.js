const Contact = require("../models/contact_model");

const contactForm = async (req,res,next) => {
  try {

    const response = req.body;
    await Contact.create(response)
    return res.status(201).json({message:"Message Send Successfully"})
    
  } catch (error) {
    next(error)
  }
}

module.exports = contactForm

