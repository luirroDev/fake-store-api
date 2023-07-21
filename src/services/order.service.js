const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
      ],
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async delete(id) {
    const order = await this.findOne(id);
    order.destroy();
    return { id };
  }
}

module.exports = OrderService;
