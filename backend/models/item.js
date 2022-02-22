//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const { allow } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: false,
  },
  figures:
    [{
      id:{
        type:String,
        required: true,
        minlength: 2,
      },
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
 //   minlength: 2,
  },
  description: {
    type: String,
  //  minlength: 2,
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
    required:true,
  }
});

  

const Item = mongoose.model("Item", itemSchema);

function validateItem(item) {
  const schema = Joi.object({
    fileUrl: Joi.string().optional().allow(''),
    figures:{data:Joi.array().optional().allow('').items(Joi.object({
      id: Joi.string().min(2).required(),
      name: Joi.string().min(2).required(),
      description: Joi.string().optional().allow(''),
    })),},
    title: Joi.string().optional().allow(''),
    description: Joi.string().optional().allow(''),
    locations: {data:Joi.array().optional().allow('').items({
      name: Joi.string().min(2).required(),
      description: Joi.string().optional().allow(''),
    }),},
    takenDate:Joi.date().optional().allow(''),
    accountId:Joi.string().required(),
  });
  return schema.validate(item);
}

exports.Item = Item;
exports.validateItem = validateItem;

