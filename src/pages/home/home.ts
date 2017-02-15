import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { Todo } from '../todo/todo';
import { TodoService } from '../todo/todo.service';
import { TodoDetail } from '../todo/todo-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  todos: Todo[];

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, private todoService:TodoService) {
    
  }

  getTodos() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit() {
    this.getTodos();
  }

  addTodo(name: string): void {
    name = name.trim();
    if (!name) { 
      return; 
    }
    this.todoService.addTodo(name);
  }

  deleteTodo(name: string): void {
    this.todoService.deleteTodo(name);
    this.getTodos();
  }

}
