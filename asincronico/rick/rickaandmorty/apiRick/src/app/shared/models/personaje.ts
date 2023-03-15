import { DatePipe } from "@angular/common";

export interface personajeModel{
    [x: string]: any;
    aux: any;

    id: number;
    name: String;
    status: String;
    species:String;
    type:String;
    gender:String;
    image: String;
    created:Date;
    episode:[];
}



