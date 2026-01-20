import express from "express";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${process.cwd()}/src/public`));

app.use('/api', apiRouter);

app.listen(8080, () => console.log("Server running on port 8080"));
