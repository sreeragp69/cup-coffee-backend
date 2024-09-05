const Service = require("../models/service_model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    

    if (!response || response.length === 0) {
      return res.status(404).json({ msg: "No services found" });
    }

    res.status(200).json({ services: response });
  } catch (error) {
    console.error(`Error fetching services: ${error.message}`);
    res.status(500).json({ msg: "Server error. Please try again later." });
  }
};

module.exports = services;
