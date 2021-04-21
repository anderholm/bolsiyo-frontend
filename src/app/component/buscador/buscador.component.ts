import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardService } from 'src/app/service/card.service';
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.buscador.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.buscadorEmitter.emit(value))
  }

  buscador = new FormControl('')

  @Output('buscador') buscadorEmitter = new EventEmitter<string>();

}
