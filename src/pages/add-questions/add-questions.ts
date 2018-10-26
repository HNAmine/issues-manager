import { QuestionService } from "./../../providers/question.service";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ToastController,
  LoadingController
} from "ionic-angular";
import { Topic } from "../../model/topic.model";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: "page-add-questions",
  templateUrl: "add-questions.html"
})
export class AddQuestions {

  topics: Topic[] = [];
  request: any = {};

  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private questionService: QuestionService,
    public loadingCtrl: LoadingController
  ) {
    this.presentLoading();
    this.questionService.getTopics().subscribe(topics => {
      this.topics = topics;
      this.dismissLoading();
    }, (err) => {
      this.dismissLoading();
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddQuestions");
  }

  addQuestion() {
    const confirm = this.alertCtrl.create({
      title: "Are you sure ?",
      message:
        "To add a question?",
      buttons: [
        {
          text: "Disagree",
          handler: () => {
            this.request = {};
          }
        },
        {
          text: "Agree",
          handler: () => {
            this.confirmQuestionCreation();
          },
          cssClass: "agree"
        }
      ]
    });
    confirm.present();
  }

  confirmQuestionCreation() {
    this.questionService.addQuestion(this.request).subscribe(succes => {
      const toast = this.toastCtrl.create({
        message: "Question was added successfully",
        duration: 3000
      });
      toast.present();
      this.request = {};
    });
  }

  presentLoading() {
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }
}
