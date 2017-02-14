export class Todo {
    id: number;
    name: string;
    completed: boolean;
    notes: string;
}

export const MOCKDATA:Todo[] = [
    {id: 1, name: 'First to do', completed: false, notes: 'some notes'},
    {id: 2, name: 'Second to do', completed: true, notes: 'etc'}
]