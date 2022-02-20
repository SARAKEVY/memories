//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: false,
  },
  figures:  [{
    name:{
      type:String,
      required: true,
      minlength: 2,
    },
    description: {
      type: String,
      required: false,
    },
  }],
  title: {
    type: String,
    required: false,
    minlength: 2,
  },
  description: {
    type: String,
    minlength: 2,
    required: false,
  },
  locations: 
    [{
      name:{
        type:String,
        required: true,
        minlength: 2,
      },
      description: {
        type: String,
        required: false,
      },
    }],
  
  takenDate: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  accountId:{
    type: String,
  }
});

const Item = mongoose.model("Item", itemSchema);

function validateItem(item) {
  const schema = Joi.object({
    fileUrl: Joi.string().optional().allow(''),
    figures: Joi.array().optional().allow(''),
    title: Joi.string().min(2).optional().allow(''),
    description: Joi.string().min(2).optional().allow(''),
    locations: Joi.array().optional().allow(''),
    takenDate:Joi.date().optional().allow(''),
  });
  return schema.validate(item);
}

exports.Item = Item;
exports.validateItem = validateItem;

