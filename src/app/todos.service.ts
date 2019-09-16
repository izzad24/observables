import { Injectable } from '@angular/core';
import { List } from './interfaces/List';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  /* lists: List[] = [
    {
      title: "Groceries",
      items: [{
        description: "Buy Vegetables",
        completed: false,
      },
      {
        description: "Buy Meat",
        completed: false,
      },
      {
        description: "Shop for clothes",
        completed: false,
      }
      ]
    },
    {
      title: "Homework",
      items: [{
        description: "Complete Angular Forms",
        completed: false,
      },
      {
        description: "Complete Angular Observables",
        completed: false,
      }
      ]
    }
  ] */

   lists = new BehaviorSubject<List[]>(
    [
      {
        title: "Groceries",
        items: [{
          description: "Buy Vegetables",
          completed: false,
        },
        {
          description: "Buy Meat",
          completed: false,
        },
        {
          description: "Shop for clothes",
          completed: false,
        }
        ]
      },
      {
        title: "Homework",
        items: [{
          description: "Complete Angular Forms",
          completed: false,
        },
        {
          description: "Complete Angular Observables",
          completed: false,
        }
        ]
      }
    ]
   )
  // username: string = "John"
  username = new BehaviorSubject<string>("John")

  // variable_name = new BehaviorSubject<variable_type>(initial_value)

  // isAdmin: boolean = true
  isAdmin = new BehaviorSubject<boolean>(false)
  // employeeId: number = 5132
  employeeId = new BehaviorSubject<number>(5132)
  
  selectedIdx = new BehaviorSubject<number>(0)

  constructor() { }

  updateUsername(newUsername: string) {
    this.username.next(newUsername)
  }

  updateIsAdmin(newIsAdmin: boolean) {
    this.isAdmin.next(newIsAdmin)
  }

  updateEmployeeID(newEmployeeID: number) {
    this.employeeId.next(newEmployeeID)
  }

  updateListTitle(newlistTitle: string, idx: number){
    const currentLists = this.lists.getValue()
    currentLists[idx].title = newlistTitle
    this.lists.next(currentLists)
  }

  isSelected(newIsSelected: number){
    console.log(newIsSelected)
    this.selectedIdx.next(newIsSelected)
  }
}
