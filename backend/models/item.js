// const Joi = require("joi");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
  },
  tags: {
    type: Array,
    minlength: 1,
    required: true,
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
  location: {
    type: String,
    minlength: 2,
    maxlength: 1000,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

// const Item = mongoose.model("Item", itemSchema);

function validateItem(item) {
  const schema = Joi.object({
    fileUrl: Joi.string(),
    tags: Joi.array().min(1).required(),
    figures: Joi.string(),
    title: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
    location: Joi.string().min(2).max(1000),
  });
  return schema.validate(item);
}

// exports.Item = Item;
// exports.validateItem = validateItem;
// גדגכהגהכ
module.exports = mongoose.model('Item', itemSchema, 'Item');
