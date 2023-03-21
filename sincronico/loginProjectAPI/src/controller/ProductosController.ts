import { Request, Response } from "express";
import { DataSource, EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";


export class ProductosController {

   
    static get = async (req: Request, res: Response) => {
        console.log('hellllo');

        const productosRepo = AppDataSource.getRepository(Productos);

        const lista = await productosRepo.find({where:{estado:true}});

        if (lista.length > 0) {
            return res.status(200).json(lista);
        } else {
            return res.status(400).json({ message: 'No hay datos' });
        }
    }

    static getById = async (req: Request, res: Response) => {
        const productosRepo = AppDataSource.getRepository(Productos);
        const id= parseInt( req.params['id']);
        
        const { valor } =  req.body;
        //console.log(idA);

        if(!id){

            return res.status(400).json({message:'No se indico el ID'});
        }
        
        try {
            const producto= await productosRepo.findOneOrFail({where:{ id, estado:true }});
            return res.status(200).json(producto);

        } catch (error) {
            return res.status(400).json({message:'No se encontro con el ID enviado'});
        }
    }

    static delete = async (req: Request, res: Response) => {
        
        const productosRepo = AppDataSource.getRepository(Productos);
        const id= parseInt( req.params['id']);

        let producto : Productos;

        try {
            producto = await productosRepo.findOneOrFail({where:{ id }});
        

        } catch (error) {
            return res.status(400).json({message:'No se encontro con el ID enviado'});
        }

        producto.estado=false;

        await productosRepo.save(producto);

        return res.status(200).json({message:'El producto se ha eliminado'});

    }

    static create = async (req: Request, res: Response) => {

        const {id, nombre, idCategoria, Precio}= req.body;

        if(!id){
            return res.status(400).json({message:'falta el id'});
        }
        else if(!idCategoria){
            return res.status(400).json({message:'falta la categoria'});
        }
        else if(!Precio){
            return res.status(400).json({message:'falta el precio'});
        }
        else if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }
        
        const productosRepo = AppDataSource.getRepository(Productos);
  
        if(await productosRepo.findOne({where:{id}})){
            return res.status(400).json({message:'Ya existe producto con ese id'});
        }
     

        let producto = new Productos();
        producto.id = id;
        producto.nombre = nombre;
        producto.idCategoria = idCategoria;
        producto.precio= Precio;
        producto.estado=true;

        await productosRepo.save(producto);
        return res.status(201).json({message:"El producto se ha creado"})

    
      
    }


    static update = async (req: Request, res: Response) => {

        const id= parseInt( req.params['id']);
        const {nombre, idCategoria, precio }= req.body

        if(!id){
            return res.status(400).json({message:'falta el id'});
        }
        else if(!idCategoria){
            return res.status(400).json({message:'falta la categoria'});
        }
        else if(!precio){
            return res.status(400).json({message:'falta el precio'});
        }
        else if(!nombre){
            return res.status(400).json({message:'falta el nombre'});
        }

        const productosRepo = AppDataSource.getRepository(Productos);
        let producto: Productos;
       
        try {
            producto = await productosRepo.findOneOrFail({where:{ id }});
        

        } catch (error) {
            return res.status(400).json({message:'No se encontro con el ID enviado'});
        }

        producto.nombre = nombre;
        producto.idCategoria= idCategoria
        producto.precio= precio;
        await productosRepo.save(producto)

        return res.status(200).json({message:'se ha actualizado el producto'});
    }

    
}

export default ProductosController;