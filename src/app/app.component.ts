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

  valores = [{
    descricao: "pedreiro",
    nome: "icaro 2",
    id:1
  },{
    descricao: "garoto de programa",
    nome: "icaro 1",
    id:101
  }];


  nome=""; 
  descricao=""
  adicionar(){
    this.valores.push({nome:this.nome ,descricao:this.descricao,id:0})
  }

}
