import { Component, OnInit } from '@angular/core';
import { TODO } from '../to-do-list/interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
   check = true;
   todos: string ;

   TODOS: TODO[] = [];
   DONE_TODOS:  TODO[] = [];

  constructor() {}

  ngOnInit() {}

  addTask(todos: string) {
    console.log('e>>>>>>>>>>>>>>>', todos);
    // if (e.which === 13 || e.which === 1) {
    this.TODOS.push({task: todos, done: false});
    this.todos = '';
    // }
  }

  clearAll() {
    this.TODOS = [];
    this.DONE_TODOS = [];
  }

  taskDone(i: any) {
        this.TODOS[i].done = true;
        const todo = this.TODOS[i];
        this.DONE_TODOS.push(todo);
        this.TODOS.splice(i, 1);
  }

  taskUndone(i: any) {
        this.DONE_TODOS[i].done = false;
        const todo = this.DONE_TODOS[i];
        this.TODOS.push(todo);
        this.DONE_TODOS.splice(i, 1);
  }
}

