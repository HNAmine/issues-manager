import { SplashScreen } from "@ionic-native/splash-screen";

import { Program } from "./../../model/program.model";
import { Speaker } from "./../../model/speaker.model";
import { Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Topic } from "../../model/topic.model";
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
    speakers: Speaker[];
    programs: Program[];
    topics: Topic[];
  } = { slides: [], programs: [], topics: [], speakers: [] };
  segment: string = "program";
  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public questionService: QuestionService,
    private splashScreen: SplashScreen
  ) {
    this.presentLoading();
    this.questionService.getConfig().subscribe(
      dash => {
        this.dash.slides = dash.slides;
        this.dash.speakers = dash.speakers;
        this.dash.programs = dash.programs;
        this.dash.topics = dash.topics;

        this.dismissLoading();
      },
      err => {
        this.dismissLoading();
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Dashboard");
    this.splashScreen.show();
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
}
