/**
 *  home.ts 
 *  Home page of application; lists all current Todos retrieved from FirebaseList.
 *  Contains functionality for adding a new todo, navigating to edit page, and 
 *  checking off.
 *  @class HomePage
 *  @author Michael Joyce 200284329
 */

// CORE
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

// DATA
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// APPLICATION
import { Todo } from '../todo/todo';
import { TodoDetail } from '../todo/todo-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  todos: FirebaseListObservable<any>;
  total: number = 0;

  constructor(public navCtrl: NavController, private af: AngularFire) {
    // Listen for current number of Todos in the database list.
    this.af.database.list('/todos/').subscribe(result => { 
      this.total = (result.length) 
    });
  }

  /**
   *  On initialization load all todos from database.
   *  @function ngOnInit
   */
  ngOnInit() {
    this.todos = this.af.database.list('/todos/');
  }

  /**
   *  Creates a new Todo and pushes to database.
   *  @function addTodo
   *  @param todoName
   */
  addTodo(todoName: string) {
    // Verify Todo is not empty...
    if (todoName == '') {
      return
    }

    // ...instantiate new Todo...
    let todo = new Todo;

    todo.name = todoName;
    todo.notes = '';
    todo.completed = false;

    // ...and send to database.
    this.todos.push(todo);
  }

  /**
   *  Navigate to TodoDetail page, passing in Todo object values
   *  as parameters.
   *  @function editTodo
   *  @param todoId, name, notes, completed
   */
  editTodo(todoId: string, name: string, notes: string, completed: boolean) {
    this.navCtrl.push(TodoDetail, {
      id: todoId,
      name: name,
      notes: notes,
      completed: completed
    })
  }

  /**
   *  When a Todo's checkbox value changes, reflect it in the
   *  database.
   *  @function updateStatus
   *  @param todoId, completed
   */
  updateStatus(todoId: string, completed: boolean) {
    this.af.database.list('/todos/').update(todoId, {
      completed: completed
    });
  }
}