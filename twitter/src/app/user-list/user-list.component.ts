import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: SessionService) { }
  users = [];
  ngOnInit() {
    this.service.getUsers()
    .subscribe(users=>{
      this.users=users
    })
  }

}
