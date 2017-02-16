import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {

    todos: FirebaseListObservable<any>;
    id: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
        this.todos = af.database.list('/todos');
        this.id = navParams.get('id');
    }

    saveTodo() {

        this.navCtrl.pop();

    }

    cancelEdit() {
        this.navCtrl.pop();
    }

    deleteTodo(name: string) {
        this.af.database.list('/todos/' + name).remove();
        this.navCtrl.pop();
    }

}