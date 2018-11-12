import { SpeakerPage } from './../speaker/speaker';
import { ListQuestions } from "./../list-questions/list-questions";
import { AddQuestions } from "./../add-questions/add-questions";

import { Component, ViewChild } from "@angular/core";
import { Platform, MenuController, Nav } from "ionic-angular";
// import { UserLogin } from '../pages/user-login/user-login';
import { Dashboard } from "../dashboard/dashboard";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class Home {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = Dashboard;
  pages: Array<{ title: string; icon: string; component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: "Dashbaord", icon: "home", component: Dashboard },
      { title: "Ask a question", icon: "md-help", component: AddQuestions },
      { title: "Welcome message", icon: "ios-chatbubbles", component: ListQuestions },
      { title: "Program", icon: "list", component: ListQuestions },
      { title: "Speakers", icon: "ios-people", component: SpeakerPage },
      { title: "Committees", icon: "md-people", component: ListQuestions },
      { title: "Contact us", icon: "call", component: ListQuestions }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
