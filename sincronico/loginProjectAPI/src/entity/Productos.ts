import { IsBoolean, IsDecimal, isIn, IsInt, isInt, IsNotEmpty, IsPositive, IsString } from "class-validator"
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { Categorias } from "./categorias"

@Entity()
export class Productos{

   
    @PrimaryColumn()
    @IsInt()
    @IsNotEmpty({message: 'Se requiere el ID'})
    id:number

    @Column()
    @IsString({message:'No es un valor de caracter'})
    @IsNotEmpty({message: 'Se requiere el nombre'})
    nombre:string

    // @Column()
    // @IsNotEmpty({message: 'Se requiere la categoria'})
    // @IsInt()
    // idCategoria:number

    @Column()

    @IsNotEmpty({message: 'Se requiere el precio'})
    @IsPositive()
    precio: number

    @Column()
    @IsBoolean({message: 'Deeb ser un valor booleano'})
    estado:boolean

    @ManyToOne(()=>Categorias, (categoria)=>categoria.productos)
    categoria: Categorias;


}