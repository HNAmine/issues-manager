import { AddQuestions } from "./../add-questions/add-questions";
import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { QuestionService } from "../../providers/question.service";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class Dashboard {
  dash: {
    slides: string[];
    subject: { title?: string; descption?: string };
    news?: { createdAt: Date; content: string }[];
    principal?: string;
    event?: string;
  } = {
    slides: [
      "https://www.eoc-sa.com/wp-content/uploads/2018/10/NEW-MI-logo-2016-300x91.jpg",
      "https://www.eoc-sa.com/wp-content/uploads/2018/08/WhatsApp-Image-2018-07-24-at-10.35.53-AM-300x96.jpeg"
    ],
    subject: {
      title: "EOC2018",
      descption: "EOC2018 : description and about (editable by admin) up"
    },
    news: [
      { createdAt: new Date(), content: "news content 1" },
      { createdAt: new Date(), content: "news content 1" },
      { createdAt: new Date(), content: "news content 1" }
    ]
  };

  segment: string = "program";
  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public questionService: QuestionService
  ) {
    // this.presentLoading();
    // this.questionService.getConfig().subscribe(
    //   dash => {
    //     this.dash = dash;
    //     this.questionService.sendCurrentIcons({
    //       principal: dash.principal,
    //       event: dash.event
    //     });
    //     this.dismissLoading();
    //   },
    //   err => {
    //     this.dismissLoading();
    //   }
    // );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Dashboard");
  }

  onNavigate(url: string) {
    window.open(url, "_blank");
  }

  presentLoading() {
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  askQuestion() {
    this.navCtrl.push(AddQuestions);
  }
}
