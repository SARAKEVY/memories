//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  description: {
    type: String,
    minlength: 2,
    required: true,
  },
});

const Location = mongoose.model("Location", locationSchema);

function validateLocation(location) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(2),
    });
  return schema.validate(location);
}

exports.Location = Location;
exports.validateLocation = validateLocation;

