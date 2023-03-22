import { IsBoolean, IsInt, IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";


@Entity()
export class Categorias{

    @PrimaryGeneratedColumn()
    @IsInt()
    @IsNotEmpty({message: 'Se requiere el id'})
    id:number;

    @Column()
    @IsNotEmpty({message: 'Se requiere el nombre'})
    nombre:String;

    @Column()
    @IsBoolean({message: 'Debe ser un valor booleano'})
    @IsNotEmpty({message: 'Se requiere el estado'})
    estado:boolean;

    @OneToMany(()=>Productos, (prod)=> prod.categoria)
    productos: Productos[]
}