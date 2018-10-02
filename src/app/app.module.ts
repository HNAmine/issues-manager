import { Dashboard } from "./../pages/dashboard/dashboard";
import { UserForgotpassword } from "./../pages/user-forgotpassword/user-forgotpassword";
import { UserLogin } from "./../pages/user-login/user-login";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { UserSignup } from "../pages/user-signup/user-signup";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserLogin,
    UserSignup,
    UserForgotpassword,
    Dashboard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
