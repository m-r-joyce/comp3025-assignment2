import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {
    @Input()
    todo: Todo;
}