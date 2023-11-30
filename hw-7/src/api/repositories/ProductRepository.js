const DB = require('../../db/prisma');
const { InvalidInputError } = require('../utils/custom-errors/HttpError');

class ProductRepository {
  constructor() {
    this.product = DB.prisma.product;
  }

  async createProduct(data) {
    return this.product
      .create({
        data: {
          ...data,
        },
      })
      .then((data) => data)
      .catch((err) => {
        if (err instanceof DB.Prisma.PrismaClientValidationError) {
          throw new InvalidInputError('Invalid product input');
        }
        throw err;
      });
  }
}

module.exports = new ProductRepository();
