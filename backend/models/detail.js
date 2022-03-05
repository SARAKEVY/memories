//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

//itemId,OwnerObject
const detailSchema = new mongoose.Schema({
    
    itemId:{
        type: Number,
        required: true,  
    },
    textDetail: {
    type: String,
    required: true,
  },
  detailOwnerId: {
    type: Number,
    required: true,
  },
  detailOwnerName: {
    type: String,
    required: true,
  },
});

const Detail = mongoose.model("Detail", detailSchema);

function validateDetail(detail) {
  const schema = Joi.object({
    itemId: Joi.number().required(),
    textDetail: Joi.string().required(),
    detailOwnerId: Joi.number().required(),
    detailOwnerName: Joi.string().required(),
    });
  return schema.validate(detail);
}

exports.Detail = Detail;
exports.validateDetail = validateDetail;

