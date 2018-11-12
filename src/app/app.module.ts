import { Home } from './../pages/home/home';
import { ListQuestions } from './../pages/list-questions/list-questions';
import { QuestionService } from './../providers/question.service';
import { AddQuestions } from './../pages/add-questions/add-questions';
import { Dashboard } from "./../pages/dashboard/dashboard";
import { UserLogin } from "./../pages/user-login/user-login";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { ContactPage } from "../pages/contact/contact";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { UserSignup } from "../pages/user-signup/user-signup";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { DetailQuestion } from '../pages/detail-question/detail-question';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    UserLogin,
    UserSignup,
    Dashboard,
    AddQuestions,
    ListQuestions,
    DetailQuestion,
    Home
  ],
  imports: [BrowserModule, HttpModule,FormsModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    UserLogin,
    UserSignup,
    Dashboard,
    AddQuestions,
    ListQuestions,
    DetailQuestion,
    Home
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuestionService
  ]
})
export class AppModule {}
