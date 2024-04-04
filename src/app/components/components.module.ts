import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
imports:[
    RouterModule
],    
declarations:[
    HeaderComponent  
],
exports:[
    HeaderComponent
]
})
export class ComponenModule{}