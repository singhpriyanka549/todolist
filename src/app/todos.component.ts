import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

interface todos {
  id: number,
  completed: boolean,
  title: string,
  userId: number
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todoItem: todos[] = [];
  public showbtnIndex: number = -1;
  public showAdd: boolean = false;
  public editItem: number = -1;
  public editStatement: string = '';
  constructor(private getTodos: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTodos.getTodo().subscribe(data => {
      let temp: todos[] = data as any;
      this.todoItem = temp;
    })
  }
  showEditDelteBtn(index: number) {
    this.showbtnIndex = index;
  }
  submitVal(data: any) {
    let tempid = this.todoItem[this.todoItem.length - 1].id;
    let tempdata: todos = {
      id: tempid + 1,
      completed: false,
      title: data,
      userId: 1
    }
    this.todoItem.push(tempdata);
    this.showAdd = false;
  }

  showAddDiv() {
    this.showAdd = true;
  }
  updateTodoList(index: number) {
    this.todoItem[index].completed = true;
  }
  deleteTodoItem(index: number) {
    this.todoItem.splice(index, 1);
  }
  editTodoItem(index: number) {
    this.editItem = index;
    this.editStatement = this.todoItem[index].title;
    var value = prompt("Please update the value", this.editStatement);
    this.todoItem[index].title = value ? value : '';
  }

}
