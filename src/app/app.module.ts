import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TodoService } from '../pages/todo/todo.service';
import { TodoDetail } from '../pages/todo/todo-detail';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    TodoDetail,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
