import { ListQuestions } from './../pages/list-questions/list-questions';
import { QuestionService } from './../providers/question.service';
import { AddQuestions } from './../pages/add-questions/add-questions';
import { Dashboard } from "./../pages/dashboard/dashboard";
import { UserForgotpassword } from "./../pages/user-forgotpassword/user-forgotpassword";
import { UserLogin } from "./../pages/user-login/user-login";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { ContactPage } from "../pages/contact/contact";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { UserSignup } from "../pages/user-signup/user-signup";
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    TabsPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    AddQuestions,
    ListQuestions
  ],
  imports: [BrowserModule, HttpModule,FormsModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    TabsPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard,
    AddQuestions,
    ListQuestions
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuestionService
  ]
})
export class AppModule {}
