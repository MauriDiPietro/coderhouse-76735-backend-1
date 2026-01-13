import express from "express";
import { products } from "./data.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  const { value } = req.query;
  if (value) {
    const filteredProducts = products.filter((p) => p.price >= parseInt(value));
    return res.json(filteredProducts);
  }
  return res.json(products);
});

app.get("/products/:idProduct", (req, res) => {
  const { idProduct } = req.params;
  const product = products.find((p) => p.id === parseInt(idProduct));
  if (!product)
    return res.status(404).json({ error: "Producto no encontrado" });
  res.json(product);
});

app.post("/", (req, res) => {
  // res.send('Hola mundo desde Express');
  // res.json({message: 'Hola mundo desde Express'});
  // res.json({data: products});
  // res.render('index')
  // res.redirect('/')
  // res.status(404).json({error: 'Recurso no encontrado'})
  console.log(req.body);
  const user = {
    ...req.body,
    id: Math.floor(Math.random() * 1000),
  };
  //registro de usuario
  res.status(201).json({ message: "Usuario creado", user });
});

app.listen(8080, () => console.log("Server running on port 8080"));
