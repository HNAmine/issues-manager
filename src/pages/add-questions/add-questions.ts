import { Dashboard } from "./../dashboard/dashboard";
import { Speaker } from "./../../model/speaker.model";
import { Section } from "./../../model/section.model";
import { QuestionService } from "./../../providers/question.service";
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ToastController,
  LoadingController
} from "ionic-angular";

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
  sections: Section[] = [];
  speakers: Speaker[] = [];
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
    this.sections.push(
      new Section(
        1,
        "Section Alpha",
        "Saturday 24 Nov 08:00 – 9:00",
        "XXXXXXXXXXX",
        "AmineHN",
        [{ id: 1, completeName: "Speacker 1" }]
      ),
      new Section(
        1,
        "Section Beta",
        "Saturday 24 Nov 08:00 – 9:00",
        "XXXXXXXXXXX",
        "AmineHN",
        [
          { id: 1, completeName: "Speacker 1" },
          { id: 2, completeName: "Speacker 2" }
        ]
      )
    );

    // this.presentLoading();
    // this.questionService.getTopics().subscribe(topics => {
    //   this.topics = topics;
    //   this.dismissLoading();
    // }, (err) => {
    //   this.dismissLoading();
    // });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddQuestions");
  }

  addQuestion() {
    const confirm = this.alertCtrl.create({
      title: "Are you sure ?",
      message: "Are you sure , to post this question ?",

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
    // this.questionService.addQuestion(this.request).subscribe(succes => {
    //   const toast = this.toastCtrl.create({
    //     message: "Question was added successfully",
    //     duration: 3000
    //   });
    //   toast.present();
    //   this.request = {};
    // });
    this.request.submited = true;
    setTimeout(() => {
      this.navCtrl.push(Dashboard);
      // this.navCtrl.
    }, 3000);
  }

  presentLoading() {
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  onSelectSection(section: Section) {
    this.request.sectionId = section.id;
    this.speakers = section.speakers.slice(0);
    this.speakers.unshift(
      new Speaker(-1, "To All speackers", null, null, null)
    );
  }
}
