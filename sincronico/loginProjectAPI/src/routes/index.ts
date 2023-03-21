import { Router } from "express";
import productos from "./productos";
import Clientes from "./Clientes";

const routes=Router();

routes.use('/productos', productos);
routes.use('/Clientes', Clientes);


export default routes;