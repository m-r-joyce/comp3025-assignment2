import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Todo } from '../todo/todo';
import { TodoDetail } from '../todo/todo-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  todos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private af: AngularFire) {
    
  }

  ngOnInit() {
    this.todos = this.af.database.list('/todos/');
  }

  addTodo(todoName) {
    let todo = new Todo;

    todo.name = todoName;
    todo.notes = '';
    todo.completed = false;

    this.todos.push(todo);
  }

  editTodo(todoId, name, notes, completed) {
    this.navCtrl.push(TodoDetail, {
      id: todoId,
      name: name,
      notes: notes,
      completed: completed
    })
  }

  updateStatus(todoId, completed) {
    this.af.database.list('/todos/').update(todoId, {
      completed: completed
    });
  }
}
