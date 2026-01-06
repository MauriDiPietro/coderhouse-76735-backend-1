const crypto = require("crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  register(obj) {
    try {
      const user = { ...obj };
      user.secret_key = crypto.randomBytes(128).toString();
      user.password = crypto
        .createHmac("sha256", user.secret_key)
        .update(user.password)
        .digest("hex");
      this.users.push(user);
      return user;
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  login(email, password) {
    try {
      const users = this.getUsers();
      const user = users.find((u) => u.email === email);
      if (!user) throw new Error("Invalid credentials");
      const nuevaCrypto = crypto.createHmac("sha256", user.secret_key).update(password).digest("hex");
      if (nuevaCrypto !== user.password) throw new Error("Invalid credentials");
      return "Login OK";
    } catch (error) {
      console.error("Login error:", error.message);
    }
  }
}

const userManager = new UserManager();

const user1 = {
    first_name: "Juan",
    last_name: "Perez",
    email: "juan@mail.com",
    password: "1234",
}

const user2 = {
    first_name: "Maria",
    last_name: "Lopez",
    email: "maria@mail.com",
    password: "5678",
}

userManager.register(user1);
userManager.register(user2);

// console.log(userManager.getUsers());
console.log(userManager.login('juan@mail.com', '1234'));
