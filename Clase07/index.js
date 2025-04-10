import express from "express";
import dotenv from "dotenv";
import routerAPI from "./routers/index.js";

dotenv.config();
const port = process.env.port;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

routerAPI(app);

app.listen(port, () => {
    console.info('Servidor en el puerto ' + port);
});