import { Router } from "express";
import CategoriasController from "../controller/CategoriasController";


const routes = Router();

routes.get('',CategoriasController.get);
routes.get('/:id',CategoriasController.getById);
routes.post('/create',CategoriasController.agegarCategoria);
routes.patch('/update/:id',CategoriasController.ActualizarCategoria);



export default routes;