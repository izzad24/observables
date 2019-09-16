import { Component, OnInit } from '@angular/core';
import { List } from '../interfaces/List';
import { FormControl } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
  list: List
  username: string
  isAdmin: boolean
  employeeId: number
  selectedIdx: number

  listTitle = new FormControl('');
  usernameForm = new FormControl('');
  isAdminForm = new FormControl(true);
  employeeIdForm = new FormControl('');

  constructor(private service: TodosService) { }

  ngOnInit() {
    this.service.selectedIdx.subscribe(value => {
      this.selectedIdx = value
      const currentlist = this.service.lists.getValue()
      this.list = currentlist[this.selectedIdx]
    })
    this.service.lists.subscribe(value => {
      if (this.selectedIdx === null){
        this.list = value[0]
      }else{
        this.list = value[this.selectedIdx]
      }
    }
      )
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

  addTask() {
    this.list.items.push({
      description: `Added Task ${this.list.items.length}`,
      completed: false
    })
  }

  toggleCompleted(item) {
    item.completed = !item.completed
  }

  updateListTitle() {
    this.service.updateListTitle(
      this.listTitle.value,
      this.selectedIdx
    )}

  updateUsername() {
    // this.username = this.usernameForm.value
    this.service.updateUsername(this.usernameForm.value)
  }

  updateIsAdmin() {
    this.service.updateIsAdmin(this.isAdminForm.value)
  }

  updateEmployeeID() {
    this.service.updateEmployeeID(this.employeeIdForm.value)
  }

}
