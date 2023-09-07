import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  //importatar o input para que o componente possa ficar dinamico
  @Input() 
  //colocando inteligencia para o componente, para alterar dinamicamente
  photoCover:string = ""
  @Input() 
  cardTitle: string= ""
  @Input() 
  cardDescription: string= ""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
