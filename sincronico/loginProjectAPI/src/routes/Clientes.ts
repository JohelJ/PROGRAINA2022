import { Router } from "express";
import ClientesController from "../controller/ClientesControlador";

const routes = Router();

routes.get('', ClientesController.get);
routes.get('/:id', ClientesController.getById);
routes.delete('/:id', ClientesController.deleteById);
routes.post('/create', ClientesController.agegarCliente);
routes.patch('/update/:cedula', ClientesController.ActualizarCliente);


export default routes;