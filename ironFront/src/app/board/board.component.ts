import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  lists:Array<any>;
  title:string;
  constructor(
    private listService:ListService
  ) { }

  listRemove(list){
    this.listService.removeList(list)
    .subscribe(list=>{
      this.getAllList();
    })
  }

  putList(list){
    this.listService.patchList(list)
    .subscribe(list=>{
      this.getAllList();
    })
  }

  addList(title){
    const newList = {
      title
    }
    this.listService.addList(newList)
    .subscribe(list=>{
      this.title = '';
      this.getAllList();
    });
  }

  ngOnInit() {
    this.getAllList();
  }

  getAllList(){
    this.listService.fetchLists()
    .subscribe(lists=>this.lists = lists);
  }

}
