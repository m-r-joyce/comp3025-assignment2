/**
 *  todo-detail.ts
 *  Provides functionality for modifying or deleting a Todo.
 *  @class TodoDetail
 *  @author Michael Joyce 200284329
 */

// CORE
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// DATA
import { AngularFire } from 'angularfire2';

// APPLICATION
import { Todo } from './todo';

@Component({
    selector: 'todo-detail',
    templateUrl: './todo-detail.html'
})
export class TodoDetail {

    // The values for these keys are passed to this class from the HomePage.
    todo: Todo;
    id: string;
    name: string;
    notes: string;
    completed: boolean;

    constructor(public navCtrl: NavController, private navParams: NavParams, private af: AngularFire) {
        this.id = navParams.get('id');
        this.name = navParams.get('name');
        this.notes = navParams.get('notes');
        this.completed = navParams.get('completed');
    }

    /**
     *  Saves new or modified Todo data to database.
     *  @function saveTodo
     *  @param id, name, notes, completed
     */
    saveTodo(id: string, name: string, notes: string, completed: string) {

        // Verify name is not empty...
        if (name == '') {
            return;
        }
        // ...and update database record with matching ID.
        this.af.database.list('/todos/').update(id, {
            name: name,
            notes: notes,
            completed: completed
        });
        // Bring it on home now.
        this.navCtrl.pop();
    }

    /**
     *  Cancels any modifications and returns to HomePage.
     *  @function cancelEdit
     */
    cancelEdit() {
        this.navCtrl.pop();
    }

    /**
     *  Deletes Todo from database.
     *  @function deleteTodo
     *  @param id
     */
    deleteTodo(id: string) {
        // Find the matching ID and remove it...
        this.af.database.list('/todos/').remove(id);
        // ...then send it back to our homie.
        this.navCtrl.pop();
    }

}