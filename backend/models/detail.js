//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

//itemId,OwnerObject
const detailSchema = new mongoose.Schema({
    
    itemId:{
        type: String,
        required: true,  
    },
    textDetail: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
});

const Detail = mongoose.model("Detail", detailSchema);

function validateDetail(detail) {
  const schema = Joi.object({
    itemId: Joi.string().required(),
    textDetail: Joi.string().required(),
    ownerId: Joi.string().required(),
    ownerName: Joi.string().required(),
    });
  return schema.validate(detail);
}

exports.Detail = Detail;
exports.validateDetail = validateDetail;

