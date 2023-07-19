const express = require('express');

const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createCustomerSchema,
  getCustomerShcema,
  updateCustomerSchema,
} = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCustomerShcema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = service.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = service.create(body);
      res.json(newCustomer);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getCustomerShcema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getCustomerShcema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
