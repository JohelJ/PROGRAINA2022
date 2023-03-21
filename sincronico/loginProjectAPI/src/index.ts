import cors = require("cors");
import * as express from "express"
import { Request, Response } from "express"
import helmet from "helmet";
import { AppDataSource } from "./data-source"
import routes from "./routes";


const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(express.json())
    app.use(cors());
    app.use(helmet());
    app.use('/', routes)

    // start express server
    app.listen(PORT,()=>{console.log(`Servidor corriendo puerto ${PORT}`)});


}).catch(error => console.log(error))
