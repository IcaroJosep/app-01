import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-01';
  descricao1='descricao do item 1';
  descricao2=``;

  usuario:{
    nome:string,
    idade:number,
    id :number
  }={
    nome :"",
    idade : 0 ,
    id : 0,}

  ClientPremium= true;
}
