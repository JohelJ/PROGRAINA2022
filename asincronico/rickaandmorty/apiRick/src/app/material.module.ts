

import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";


const mylistMaterialModules=[ 
    MatMenuModule,

    ];

@NgModule({

imports:[...mylistMaterialModules],
exports:[...mylistMaterialModules]

})
export class MaterialModule{}