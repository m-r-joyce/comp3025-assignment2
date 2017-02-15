import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {
    @Input()
    todo: Todo;

    constructor(public navCtrl: NavController) {
    }


}