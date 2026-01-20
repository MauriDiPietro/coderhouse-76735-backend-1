import fs from "fs";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

class UserManager {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      if (!fs.existsSync(this.path)) return [];
      const data = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      throw new Error("Error reading users:", error);
    }
  }

  async getById(id) {
    try {
      const users = await this.getAll();
      const user = users.find((u) => u.id === id);
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  }

  async register(body) {
    try {
      const users = await this.getAll();
      const user = { id: uuidv4(), ...body };
      user.password = bcrypt.hashSync(user.password, 10);
      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users));
      return user;
    } catch (error) {
      throw new Error("Error creating user:", error);
    }
  }

  async login(email, password) {
    try {
      const users = await this.getUsers();
      const user = users.find((u) => u.email === email);
      if (!user) throw new Error("Invalid credentials");
      const isValidPass = bcrypt.compareSync(password, user.password);
      if (!isValidPass) throw new Error("Invalid credentials");
      return "Login OK";
    } catch (error) {
      throw new Error("Login error:", error);
    }
  }

  async update(id, body) {
    try {
      const user = await this.getById(id);
      const users = await this.getUsers();
      const index = users.findIndex((u) => u.id === id);
      users[index] = { ...user, ...body };
      return users[index];
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const user = await this.getById(id);
      const users = await this.getAll();
      const index = users.findIndex((u) => u.id === id);
      users.splice(index, 1);
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const userManager = new UserManager("./users.json");
