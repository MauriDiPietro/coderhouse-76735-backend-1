import express from "express";
import apiRouter from "./routes/api/index.js";
import viewsRouter from "./routes/views/index.js";
import handlebars from 'express-handlebars'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${process.cwd()}/src/views`);
app.set('view engine', 'handlebars')

app.use('/api', apiRouter);
app.use('/', viewsRouter);

app.listen(8080, () => console.log("Server running on port 8080"));
