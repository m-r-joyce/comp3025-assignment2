import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  todos: Todo[];

  constructor(public navCtrl: NavController, private todoService:TodoService) {
    
  }

  getTodos() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit() {
    this.getTodos();
  }

}
