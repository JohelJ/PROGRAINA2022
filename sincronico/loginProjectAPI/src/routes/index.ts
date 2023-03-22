import { Router } from "express";
import productos from "./productos";
import Clientes from "./Clientes";
import Categorias from "./Categorias";

const routes=Router();

routes.use('/productos', productos);
routes.use('/Clientes', Clientes);
routes.use('/Categorias', Categorias);



export default routes;