import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Dashboard } from '../dashboard/dashboard';
import { UserLogin } from '../user-login/user-login';

@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  dashboardPage(){ this.navCtrl.push(Dashboard); }
  loginPage(){ this.navCtrl.push(UserLogin);}
}
