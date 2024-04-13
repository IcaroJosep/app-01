import { Component } from "@angular/core";

@Component({
    selector:`app-binding`,
    template: `
        <h1>Imagem</h1>  
        <img [src]="imagem" [style]="{width: width}"/>  
    `
})
export class BindingPageComponent { 
   
    width ="300px"
    imagem="https://avatars.githubusercontent.com/u/147887309?v=4"
}