import { Request, response, Response } from "express";
import { AppDataSource } from "../data-source";
// import { request } from "https";

import { Clientes } from "../entity/Clientes";

class ClientesController {

    static get = async (req: Request, res: Response) => {

        //repositorio(entidad de Clientes )
        const ClientesRepo = AppDataSource.getRepository(Clientes);

        // Vericacion de entrada a la BD
        const listaClientes = await ClientesRepo.find({ where: { estado: true } });//amlacena todos los clientes en listaClientes
        if (listaClientes.length > 0) { // si encuantra 1 o mas datos:clientes los muestra
            return res.status(200).json(listaClientes);
        } else { // de lo contrario un msnJson
            return res.status(400).json({ message: 'no hay datos' })
        }
    }

    // Busquedad get por ID
    static getById = async (req: Request, res: Response) => {
        //pasar datos por id
        const ClientesRepo = AppDataSource.getRepository(Clientes);
        // parseamos el ID a Int
        const id = parseInt(req.params['id']);
        if (!id) { //si no idica el ID manda un msnJson
            return res.status(400).json({ message: 'no se indico id' })
        }
        try { // si lo encuantra manda la respuesta en Json
            const clientes = await ClientesRepo.findOneOrFail({ where: { cedula: id, estado: true } })
            return res.status(200).json(clientes)

        } catch (error) { //si no encuantra el ID manda un msnJson
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

    }

    // Eliminacion logica del clientes
    static deleteById = async (req: Request, res: Response) => {
        //pasar datos por id
        const ClientesRepo = AppDataSource.getRepository(Clientes);

        const id = parseInt(req.params['id']);
        // var = variable Global cualquiera lo puede accede 
        // let = cuando esta dentro de un metodo o que lo contenga no es global
        let cliente: Clientes; //se agrega la variable dentro del tryCatch para que la puedan acceder todo el metodo
        // un try-catch donde muestra un mensaje en el catch si no encuantra el ID
        try {
            cliente = await ClientesRepo.findOneOrFail({ where: { cedula: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })

        }
        // se cambia el valor a falso para una eliminacion logica
        cliente.estado = false;
        await ClientesRepo.save(cliente);//se guarda el cambion con .save
        // reyorna un mesaje que se logro la eliminacion del clientes
        return res.status(200).json({ message: 'El cliente se ha eliminado' })
    }

    static agegarCliente = async (req: Request, res: Response) => {
        const {cedula, nombre, apellido1, apellido2, email, fechaNac, estado }= req.body;

        if(!cedula){
            return res.status(400).json({message:'falta la cedula'});
        }
        else if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }
        else if(!apellido1){
            return res.status(400).json({message:'falta el apellido 1'});
        }
        else if(!apellido2){
            return res.status(400).json({message:'falta el apellido 2'});
        }
        else if(!email){
            return res.status(400).json({message:'falta el correo'});
        }
        else if(!fechaNac){
            return res.status(400).json({message:'falta la fecha de nacimiento'});
        }
        else if(!estado){
            return res.status(400).json({message:'falta el estado'});
        }
        
        const ClientesRepo = AppDataSource.getRepository(Clientes);
  
        if(await ClientesRepo.findOne({where:{cedula}})){
            return res.status(400).json({message:'Ya existe el cliente con esa cedula'});
        }
     

        let cliente = new Clientes();
        cliente.cedula = cedula;
        cliente.nombre = nombre;
        cliente.apellido1= apellido1;
        cliente.apellido2=apellido2;
        cliente.email = email;
        cliente.fechaNac = fechaNac;
        cliente.estado = estado;

        await ClientesRepo.save(cliente);
        return res.status(201).json({message:"El cliente se ha creado"})

    }

    static ActualizarCliente = async (req: Request, res: Response) => {

        const {cedula, nombre, apellido1, apellido2, email, fechaNac, estado }= req.body;

    

       
        if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }
        else if(!apellido1){
            return res.status(400).json({message:'falta el apellido 1'});
        }
        else if(!apellido2){
            return res.status(400).json({message:'falta el apellido 2'});
        }
        else if(!email){
            return res.status(400).json({message:'falta el correo'});
        }
        else if(!fechaNac){
            return res.status(400).json({message:'falta la fecha de nacimiento'});
        }
        else if(!estado){
            return res.status(400).json({message:'falta el estado'});
        }

        const ClientesRepo = AppDataSource.getRepository(Clientes);
        let cliente: Clientes;

        try {
            cliente = await ClientesRepo.findOneOrFail({where:{ cedula }});
        

        } catch (error) {
            return res.status(400).json({message:'No se encontro Cliente con el ID enviado'});
        }

        cliente.nombre = nombre;
        cliente.apellido1= apellido1;
        cliente.apellido2= apellido2;
        cliente.email= email;
        cliente.fechaNac = fechaNac;
        cliente.estado = estado;
        await ClientesRepo.save(cliente)

        return res.status(200).json({message:'se ha actualizado el Cliente'});
    }

}

export default ClientesController;