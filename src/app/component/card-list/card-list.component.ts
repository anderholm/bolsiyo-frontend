import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  constructor(public cardService: CardService) {}

  cardInfo: any;

  ngOnInit(): void {
    this.cardService.getCardInfo().subscribe((response) => {
      this.cardInfo = response;
    });
  }
}
