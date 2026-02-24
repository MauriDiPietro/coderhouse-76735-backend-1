import { userRepository } from "../repositories/user-repository.js";
import { CustomError } from "../utils/custom-error.js";

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (req, res, next) => {
    try {
        const { page, limit } = req.query;
      const response = await this.repository.getAll(page, limit);
      res.json({
        status: "success",
        payload: response.docs,
        totalPages: response.totalPages
      });
    } catch (error) {
      next(error);
    }
  };

    /*
  {

status:success/error

payload: Resultado de los productos solicitados

totalPages: Total de páginas

prevPage: Página anterior

nextPage: Página siguiente

page: Página actual

hasPrevPage: Indicador para saber si la página previa existe

hasNextPage: Indicador para saber si la página siguiente existe.

prevLink: Link directo a la página previa (null si hasPrevPage=false)

nextLink: Link directo a la página siguiente (null si hasNextPage=false)

}
  */

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.repository.getById(id);
      if (!response) throw new CustomError("User not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  getByName = async (req, res, next) => {
    try {
      const { name } = req.params;
      const response = await this.repository.getByName(name);
      if (!response) throw new CustomError("User not found", 404);
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
      if (!response) throw new CustomError("User not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.repository.delete(id);
      if (!response) throw new CustomError("User not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  addPetToUser = async (req, res, next) => {
    try {
      const { userId, petId } = req.params;
      const response = await this.repository.addPetToUser(userId, petId);
      if (!response) throw new CustomError("User not found", 404);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userRepository);
