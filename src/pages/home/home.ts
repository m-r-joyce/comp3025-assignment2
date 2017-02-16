import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

// import { Todo } from '../todo/todo';
// import { TodoService } from '../todo/todo.service';
import { TodoDetail } from '../todo/todo-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
      this.todos = af.database.list('/todos');
    }

  addTodo(todoName) {
      let ref = this.todos.push({
        name: todoName,
        notes: '',
        completed: false
      });
  }

  editTodo(id) {
    this.navCtrl.push(TodoDetail, {
      id: id
    });
  }
}
