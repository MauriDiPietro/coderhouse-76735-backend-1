import { UserModel } from "../models/user-model.js";
import { petRepository } from "./pet-repository.js";

class UserRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async (page = 1, limit = 10) => {
    try {
      return await this.model.paginate({}, { page, limit });
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      return await this.model.findById(id).populate('pets', { _id: 0 }) //nombre de la propiedad a popular
      // .explain();
    } catch (error) {
      throw new Error(error);
    }
  };

  getByName = async (name) => {
    try {
      return await this.model.findOne({ first_name: name }).explain();
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (body) => {
    try {
      return await this.model.create(body);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.model.findByIdAndUpdate(id, body, {
        returnDocument: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  };

  addPetToUser = async (userId, petId) => {
    try {
      const pet = await petRepository.getById(petId);
      if (!pet) throw new Error("Pet not found");
      return await this.model.findByIdAndUpdate(
        userId,
        { $push: { pets: petId } },
        { returnDocument: true }
      )
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const userRepository = new UserRepository(UserModel);
