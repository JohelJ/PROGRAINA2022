import { Request, Response } from "express";
import { DataSource, EntityManager, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";
import {validate} from 'class-validator'
import { Categorias } from "../entity/categorias";

export class ProductosController {

   
    static get = async (req: Request, res: Response) => {
        

        const productosRepo = AppDataSource.getRepository(Productos);

        const lista = await productosRepo.find({where:{estado:true}, relations:['categoria']});

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
            const producto= await productosRepo.findOneOrFail({where:{ id, estado:true }, relations:['categoria']});
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

        const {id, nombre, idCat, Precio}= req.body;

     if(!id){
         return res.status(400).json({message:'falta el id'});
        }
         else if(!idCat){
             return res.status(400).json({message:'falta la categoria'});
         }
        // else if(!Precio){
        //     return res.status(400).json({message:'falta el precio'});
        // }
        // else if(!nombre){
        //     return res.status(400).json({message:'falta el nombre'});
        // }
        



        const productosRepo = AppDataSource.getRepository(Productos);
        const categoriatosRepo = AppDataSource.getRepository(Categorias);
  
        if(await productosRepo.findOne({where:{id}})){
            return res.status(400).json({message:'Ya existe producto con ese id'});
        }

        let categoria: Categorias;
        try {
            categoria= await categoriatosRepo.findOneByOrFail({id:idCat}); 
        } catch (error) {
            return res.status(404).json({message:'nmo existe la categoria indicada'})
        }
     

        let producto = new Productos();
        producto.id = id;
        producto.nombre = nombre;
        producto.categoria= categoria;
        producto.precio= Precio;
        producto.estado=true;

            
        const errors = await validate(producto, { validationError: { target: false,value:false } })
        if(errors.length>0){
            return res.status(400).json(errors)
        }
        
        await productosRepo.save(producto);
        return res.status(201).json({message:"El producto se ha creado"})
    
    
      
    }


    static update = async (req: Request, res: Response) => {

        const id= parseInt( req.params['id']);
        const {nombre, idCat, precio }= req.body

        if(!id){
            return res.status(400).json({message:'falta el id'});
         }
         else if(!idCat){
             return res.status(400).json({message:'falta la categoria'});
         }
        // else if(!precio){
        //     return res.status(400).json({message:'falta el precio'});
        // }
        // else if(!nombre){
        //     return res.status(400).json({message:'falta el nombre'});
        // }

        const productosRepo = AppDataSource.getRepository(Productos);
        const categoriaRepo = AppDataSource.getRepository(Categorias);
        let producto: Productos;
        let categoria: Categorias;
       
        try {
            producto = await productosRepo.findOneOrFail({where:{ id }});
        

        } catch (error) {
            return res.status(404).json({message:'No se encontro con el ID enviado'});
        }

        try {   
            categoria = await categoriaRepo.findOneByOrFail({id:idCat})
        } catch (error) {
            return res.status(404).json({message:'No existe la categoria ingresada'});
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio= precio;

        const errors = await validate(producto, { validationError: { target: false,value:false } })
        if(errors.length>0){
            return res.status(400).json(errors)
        }

        await productosRepo.save(producto)

        return res.status(200).json({message:'se ha actualizado el producto'});
    }

    
}

export default ProductosController;