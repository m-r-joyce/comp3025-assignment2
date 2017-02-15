import { Injectable } from '@angular/core';

import { Todo, MOCKDATA } from './todo';

@Injectable()
export class TodoService {
    getTodos(): Promise<Todo[]> {
        return Promise.resolve(MOCKDATA);
    }

    addTodo(name: string): void {
        MOCKDATA.push({
            id: MOCKDATA.length + 1,
            name: name,
            notes: '',
            completed: false
        })
    }

    getTodo(id: number): Todo {
        for (var i = 0; i < MOCKDATA.length; i++) {
            if (MOCKDATA[i].id == id) {
                return MOCKDATA[i];
            }
        }
    }

    saveTodo(todo: Todo) {

    }

    deleteTodo(id: number): void {
        for (var i = 0; i < MOCKDATA.length; i++) {
            if (MOCKDATA[i].id == id) {
                MOCKDATA.splice(i, 1);
                return;
            }
        }
    }
}
