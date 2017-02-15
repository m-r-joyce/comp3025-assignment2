import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {

    constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService) {
        
    }

    id = this.navParams.get('id');
    todo = this.getTodo()

    name = this.todo.name;
    notes = this.todo.notes;
    completed = this.todo.completed;

    deleteTodo() {
        this.todoService.deleteTodo(this.id);
        this.navCtrl.pop();
    }

    saveTodo() {
        this.todo.id = this.id;
        this.todo.name = this.name;
        this.todo.notes = this.notes;
        this.todo.completed = this.completed;

        this.todoService.saveTodo(this.todo);
        this.navCtrl.pop();
    }

    cancelEdit() {
        this.navCtrl.pop();
    }

    getTodo(): Todo {
        return this.todoService.getTodo(this.id);
    }

}