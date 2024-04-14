import { Component } from "@angular/core";

@Component({
    selector:`app-binding`,
    template: `
        <h1>Imagem</h1>  
        <img [src]="imagem" [style]="{width: width}"/>  
        <hr>
        <br>


        <h1>Utilizando class binding para aplicar estilos</h1>
        <div class="alert" [class]="{sucesso:valor}">
            alerta
        </div>
        <button (click)="enviardados()"> enviar dados</button>
        `,
        styles:[`
            .alert{
                width:200px;
                height: 100px;
                border: 1px solid blue;
            }

            .sucesso{
                border: 5px solid green;
            }  
       `]    
})
export class BindingPageComponent { 
   
    width ="300px"
    imagem="https://avatars.githubusercontent.com/u/147887309?v=4"

    valor=true;
    enviardados(){
        this.valor=!this.valor
    }
}