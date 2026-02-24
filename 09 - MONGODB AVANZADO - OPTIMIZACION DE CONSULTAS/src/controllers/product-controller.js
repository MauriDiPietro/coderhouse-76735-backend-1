import { productRepository } from "../repositories/product-repository.js";
import { CustomError } from "../utils/custom-error.js";

class ProductController {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (req, res, next) => {
    try {
      const response = await this.repository.getAll();
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.repository.getById(id);
      if (!response) throw new CustomError("Product not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const response = await this.repository.create(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.repository.update(id, req.body);
       if (!response) throw new CustomError("Product not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.repository.delete(id);
       if (!response) throw new CustomError("Product not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const productController = new ProductController(productRepository);
