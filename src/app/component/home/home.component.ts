import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CardService} from '../../service/card.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() buscador:any
  constructor(public cardService: CardService) { }

  ngOnInit(): void {
  }
  cardInfo: any;

  handleBuscadorEmitter(value:string){
    console.log(value)
    //this.filtrarValor=value
  }

 // filtrarValor=''
}
