import { Speaker } from "./../../model/speaker.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "speaker",
  templateUrl: "speaker.html"
})
export class SpeakerPage {
  speakers: Speaker[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakers.push(
      new Speaker(
        1,
        "Amine HN",
        "IEDC",
        "best developer ever !",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      ),
      new Speaker(
        1,
        "Amine HN",
        "IEDC",
        "best developer ever !",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      ),
      new Speaker(
        1,
        "Amine HN",
        "IEDC",
        "best developer ever !",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      )
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad speaker");
  }
}
