import { Injectable } from '@angular/core';

import { Todo, MOCKDATA } from './todo';

@Injectable()
export class TodoService {
    getTodos(): Promise<Todo[]> {
        return Promise.resolve(MOCKDATA);
    }
}
