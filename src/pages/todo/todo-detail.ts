import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {

    todo: Todo;
    id: string;
    name: string;
    notes: string;
    completed: boolean;

    constructor(public navCtrl: NavController, private navParams: NavParams, private af: AngularFire) {
        this.name = navParams.get('name');
        this.notes = navParams.get('notes');
        this.completed = navParams.get('completed');
    }

    cancelEdit() {
        this.navCtrl.pop();
    }

}