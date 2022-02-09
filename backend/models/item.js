//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  figures: {
    type: Array,
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  description: {
    type: String,
    minlength: 2,
    required: true,
  },
  locations: {
    type: Array,
  },
  takenDate: {
    type: Date,
    default: Date.now(),
  },
});

const Item = mongoose.model("Item", itemSchema);

function validateItem(item) {
  const schema = Joi.object({
    fileUrl: Joi.string(),
    figures: Joi.array(),
    title: Joi.string().min(2),
    description: Joi.string().min(2),
    locations: Joi.array,
    takenDate:Joi.date(),
  });
  return schema.validate(item);
}

exports.Item = Item;
exports.validateItem = validateItem;

