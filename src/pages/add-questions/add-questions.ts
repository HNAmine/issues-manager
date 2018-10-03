import { UserLogin } from './../user-login/user-login';
import { Dashboard } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-questions',
  templateUrl: 'add-questions.html',
})
export class AddQuestions {

  os: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestions');
  }

  addQuestion(){
    const confirm = this.alertCtrl.create({
      title: 'êtes vous sûr ?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.confirmQuestionCreation();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.confirmQuestionCreation();
          },
          cssClass :"agree"
        }
      ]
    });
    confirm.present();
  }

  confirmQuestionCreation() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

}
