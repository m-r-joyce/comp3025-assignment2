import { Component, Input } from '@angular/core';
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

    cancelEdit() {
        this.navCtrl.pop();
    }

    getTodo(): Todo {
        return this.todoService.getTodo(this.id);
    }

}