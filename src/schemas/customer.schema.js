const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string();
const userId = Joi.number().integer();

const getCustomerShcema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone,
  userId: userId.required(),
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
});

module.exports = {
  getCustomerShcema,
  createCustomerSchema,
  updateCustomerSchema,
};
