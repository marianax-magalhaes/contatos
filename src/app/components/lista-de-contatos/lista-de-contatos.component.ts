import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  //atributo contatos vai vir do model contato.ts 
  //necessario esse [] para avissar que é um array!
  contatos:Contato[] = [
      {
      nome:"Mariana Ribeiro 1",
      email: "mariana@teste.com",
      telefones:["111-111"]
      },
      {
      nome:"Mariana Ribeiro 2",
      email: "mariana@teste.com",
      telefones:["222-222"]
      },
      {
      nome:"Mariana Ribeiro 3",
      email: "mariana@teste.com",
      telefones:["333-333"]
      },
      {
      nome:"Mariana Ribeiro 4",
      email: "mariana@teste.com",
      telefones:["444-444"]
      },
      {
      nome:"Mariana Ribeiro 5",
      email: "mariana@teste.com",
      telefones:["555-555"]
      },
      {
      nome:"Mariana Ribeiro 6",
      email: "mariana@teste.com",
      telefones:["666-666"]
      },
      {
      nome:"Mariana Ribeiro 7",
      email: "mariana@teste.com",
      telefones:["777-777"]
      },
      {
      nome:"Mariana Ribeiro 8",
      email: "mariana@teste.com",
      telefones:["888-888"]
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
