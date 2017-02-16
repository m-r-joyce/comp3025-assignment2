export class Todo {
    name: string;
    completed: boolean;
    notes: string;
}

export const MOCKDATA:Todo[] = [
    {name: 'First to do', completed: false, notes: 'some notes'},
    {name: 'Second to do', completed: true, notes: 'etc'},
    {name: 'Third', completed: true, notes: 'This todo has more notes in order to see how text wraps in Ionic and possible truncate'}
]