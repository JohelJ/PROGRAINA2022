import "reflect-metadata"
import { DataSource } from "typeorm"
import { Productos } from "./entity/Productos"
import { Clientes } from "./entity/Clientes"
import { User } from "./entity/User"
import { Categorias } from "./entity/categorias"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "login",
    synchronize: true,
    logging: false,
    entities: [User, Productos, Clientes, Categorias],
    migrations: [],
    subscribers: [],
})
