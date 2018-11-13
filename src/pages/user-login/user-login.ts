import { Home } from "./../home/home";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { UserSignup } from "../user-signup/user-signup";

@Component({
  selector: "page-user-login",
  templateUrl: "user-login.html"
})
export class UserLogin {

  credential: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserLogin");
  }

  homePage() {
    this.navCtrl.push(Home);
  }
  signupPage() {
    this.navCtrl.push(UserSignup);
  }
}
