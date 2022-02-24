//import { Calendar } from 'primereact/calendar';

// const Joi = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  detailText: {
    type: String,
    required: true,
  },
  detailOwner: {
    type: String,
    required: true,
  },
});

const Detail = mongoose.model("Detail", detailSchema);

function validateDetail(detail) {
  const schema = Joi.object({
    detailText: Joi.string().required(),
    detailOwner: Joi.string().required(),
    });
  return schema.validate(detail);
}

exports.Detail = Detail;
exports.validateDetail = validateDetail;

