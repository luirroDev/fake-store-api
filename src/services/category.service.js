const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}

  async find() {
    return await models.Category.findAll();
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async findProductByCategoryId(id) {
    const category = await models.Category.findByPk(id, {
      include: 'products',
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category.products;
  }

  async create(data) {
    return await models.Category.create(data);
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    return await category.update(changes);
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoryService;
