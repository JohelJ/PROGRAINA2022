

import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule} from "@angular/material/card";
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";


const mylistMaterialModules=[ 
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,

    ];

@NgModule({

imports:[...mylistMaterialModules],
exports:[...mylistMaterialModules]

})
export class MaterialModule{}