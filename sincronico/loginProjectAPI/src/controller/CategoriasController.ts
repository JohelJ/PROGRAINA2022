import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Categorias } from "../entity/categorias";



class CategoriasController{

    static get = async(req:Request,res:Response) =>{


        const categoriasRepo = AppDataSource.getRepository(Categorias);


        const listaCatego = await categoriasRepo.find({ where: { estado: true } ,relations:['productos']});

        if (listaCatego.length > 0) { 
          return res.status(200).json(listaCatego);
        } else { 
          return res.status(400).json({ message: 'no hay datos' })
        }
      }

      static getById = async (req: Request, res: Response) => {
        //pasar datos por id
        const CatRepo = AppDataSource.getRepository(Categorias);
        // parseamos el ID a Int
        const id = parseInt(req.params['id']);
        if (!id) { //si no idica el ID manda un msnJson
            return res.status(400).json({ message: 'no se indico id' })
        }
        try { // si lo encuantra manda la respuesta en Json
            const categorias = await CatRepo.findOneOrFail({ where: { id: id, estado: true } })
            return res.status(200).json(categorias)

        } catch (error) { //si no encuantra el ID manda un msnJson
            return res.status(400).json({ message: 'no se encontro con el id' })

        }

    }

    // Eliminacion logica del clientes
    static deleteById = async (req: Request, res: Response) => {
        //pasar datos por id
        const CatRepo = AppDataSource.getRepository(Categorias);

        const id = parseInt(req.params['id']);
        // var = variable Global cualquiera lo puede accede 
        // let = cuando esta dentro de un metodo o que lo contenga no es global
        let Cateforia: Categorias; //se agrega la variable dentro del tryCatch para que la puedan acceder todo el metodo
        // un try-catch donde muestra un mensaje en el catch si no encuantra el ID
        try {
            Cateforia = await CatRepo.findOneOrFail({ where: { id: id, estado: true } })
        } catch (error) {
            return res.status(400).json({ message: 'no se encontro con el id' })

        }
        // se cambia el valor a falso para una eliminacion logica
        Cateforia.estado = false;
        await CatRepo.save(Cateforia);//se guarda el cambion con .save
        // reyorna un mesaje que se logro la eliminacion del clientes
        return res.status(200).json({ message: 'El cliente se ha eliminado' })
    }

    static agegarCategoria = async (req: Request, res: Response) => {
        const {id, nombre, estado }= req.body;

        if(!id){
            return res.status(400).json({message:'falta el id'});
        }
        else if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }
        else if(!estado){
            return res.status(400).json({message:'falta el estado'});
        }
        
        const CatRepo = AppDataSource.getRepository(Categorias);
  
        if(await CatRepo.findOne({where:{id}})){
            return res.status(400).json({message:'Ya existe el cliente con esa cedula'});
        }
     

        let Categoria = new Categorias();
        Categoria.id = id;
        Categoria.nombre = nombre;
        Categoria.estado= estado;
      

        await CatRepo.save(Categoria);
        return res.status(201).json({message:"El cliente se ha creado"})

    }

    static ActualizarCategoria = async (req: Request, res: Response) => {

        const {nombre, estado }= req.body;

    
        const id= parseInt( req.params['id']);
      
        if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }
        else if(!estado){
            return res.status(400).json({message:'falta el estado'});
        }

        const CatRepo = AppDataSource.getRepository(Categorias);
        let catego: Categorias;

        try {
            catego = await CatRepo.findOneOrFail({where:{ id }});
        

        } catch (error) {
            return res.status(400).json({message:'No se encontro categoria con el id ingresado'});
        }

        catego.nombre = nombre;
        catego.estado= estado;
       
        await CatRepo.save(catego)

        return res.status(200).json({message:'se ha actualizado la categoria'});

    }


}





export default CategoriasController;