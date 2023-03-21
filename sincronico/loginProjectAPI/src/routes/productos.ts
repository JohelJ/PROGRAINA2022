import { Router } from "express";
import ClientesController from "../controller/ClientesControlador";
import ProductosController from "../controller/ProductosController";

const routes= Router();

routes.get('', ProductosController.get);
routes.get('/:id', ProductosController.getById);
routes.delete('/:id', ProductosController.delete);
routes.post('/create', ProductosController.create);
routes.patch('/update/:id',ProductosController.update);


export default routes;