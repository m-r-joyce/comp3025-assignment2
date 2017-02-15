import { Injectable } from '@angular/core';

import { Todo, MOCKDATA } from './todo';

@Injectable()
export class TodoService {
    getTodos(): Promise<Todo[]> {
        return Promise.resolve(MOCKDATA);
    }

    addTodo(name: string): void {
        MOCKDATA.push({
            name: name,
            notes: '',
            completed: false
        })
    }

    deleteTodo(name: string): void {
        for (var i = 0; i < MOCKDATA.length; i++) {
            if (MOCKDATA[i].name == name) {
                MOCKDATA.splice(i, 1);
                return;
            }
        }
    }
}
