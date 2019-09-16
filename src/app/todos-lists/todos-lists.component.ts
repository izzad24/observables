import { Component, OnInit } from '@angular/core';
import { List } from '../interfaces/List';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-lists',
  templateUrl: './todos-lists.component.html',
  styleUrls: ['./todos-lists.component.css']
})
export class TodosListsComponent implements OnInit {
  lists: List[]
  username: string
  isAdmin: boolean
  employeeId: number

  constructor(private service: TodosService) { }

  ngOnInit() {
    this.service.lists.subscribe(value => {
      console.log(value)
      this.lists = value
    })
    this.service.username.subscribe(value => {
      this.username = value
    })
    this.service.isAdmin.subscribe(value => {
      this.isAdmin = value
    })
    this.service.employeeId.subscribe(value =>{
      this.employeeId = value
    })
  }

  isSelected(idx){
    console.log(idx)
    this.service.isSelected(idx)
  }

}
