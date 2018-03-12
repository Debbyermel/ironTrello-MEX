import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card;
  @Output() refrescaAbuelo = new EventEmitter<any>();
  constructor(private cardService:CardService) { }

  deleteCard(){
    if(!confirm("seguro? D=")) return;
    this.cardService.removeItem(this.card)
    .subscribe(card=>{
      this.refrescaAbuelo.emit();
    })
  }

  ngOnInit() {
  }

}
