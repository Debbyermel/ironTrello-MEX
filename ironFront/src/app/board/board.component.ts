import { Component, OnInit } from '@angular/core';
import {ListService} from '../services/list.service';
import {SessionService} from '../services/auth.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  lists:Array<any>;
  title:string;
  constructor(
    private listService:ListService,
    private session:SessionService
  ) { }

  newUser = {email:'', password:''};
  user;

  login(){
    this.session.login(this.newUser)
    .subscribe(data=>{
      this.user = data;
      localStorage.setItem("user", JSON.stringify(data));
    })
  }


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
    //aqui va la segurida =P
    if(!localStorage.getItem('user')) return;
    this.user = JSON.parse(localStorage.getItem("user"));
    //if(this.user.roles === "ADMIN")
    this.getAllList();
  }

  getAllList(){
    this.listService.fetchLists()
    .subscribe(lists=>this.lists = lists);
  }

}
