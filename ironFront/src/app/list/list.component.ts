import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list;
  @Output() editTitle = new EventEmitter<any>(); 
  @Output() removeList = new EventEmitter<any>();
  showEdit:boolean = false;
  constructor() { }


  deleteList(){
    if(!confirm("estas seguro?")) return;
    this.removeList.emit(this.list);
    this.showEdit = false;
  }

  showInput(){
    this.showEdit = true;
  }

  sendModification(){
    this.editTitle.emit(this.list);
    this.showEdit = false;
  }

  ngOnInit() {
  }

}
