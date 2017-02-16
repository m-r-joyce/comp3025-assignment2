/**
 *  app.module.ts 
 *  Standard Ionic2/Angular2 app module; loads necessary classes.
 *  @class AppModule
 *  @author Michael Joyce 200284329
 */

// CORE
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// DATA
import { AngularFireModule } from 'angularfire2';

// APPLICATION
import { TodoDetail } from '../pages/todo/todo-detail';
import { HomePage } from '../pages/home/home';

// Firebase configuration values.
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler} ]
})
export class AppModule {}
