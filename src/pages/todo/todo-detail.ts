import { Component, Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {
    @Input()
    todo: Todo;

    name;
    notes;

    constructor(public navCtrl: NavController, public view: ViewController) {

    }

    saveTodo() {
        let todo = {
            name: this.name,
            notes: this.notes
        }
        this.view.dismiss(todo);
    }

    deleteTodo() {
        
    }

    cancelEdit() {
        this.view.dismiss();
    }

}