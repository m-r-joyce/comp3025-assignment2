export class Todo {
    name: string;
    completed: boolean;
    notes: string;
}

export const MOCKDATA:Todo[] = [
    {name: 'First to do', completed: false, notes: 'some notes'},
    {name: 'Second to do', completed: true, notes: 'etc'}
]