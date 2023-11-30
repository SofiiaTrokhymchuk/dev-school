const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
  async createProduct(productData) {
    const product = await ProductRepository.createProduct(productData);

    return product;
  }
}

module.exports = new ProductService();
