import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodoService } from '../pages/todo/todo.service';
import { TodoDetail } from '../pages/todo/todo-detail';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAKXHveQuKNzloCQVJiW5D0WcW4WFD04xo",
  authDomain: "comp3025assignment2.firebaseapp.com",
  databaseURL: "https://comp3025assignment2.firebaseio.com",
  storageBucket: "comp3025assignment2.appspot.com",
  messagingSenderId: "674220252606"
};

@NgModule({
  declarations: [
    MyApp,
    TodoDetail,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoDetail,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TodoService ]
})
export class AppModule {}
