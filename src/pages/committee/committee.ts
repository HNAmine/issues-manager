import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Committee } from "../../model/committee.model";

@Component({
  selector: "Committee",
  templateUrl: "Committee.html"
})
export class CommitteePage {
  committees: Committee[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.committees.push(
      new Committee(
        1,
        "Amine HN",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      ),
      new Committee(
        1,
        "Amine HN",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      ),
      new Committee(
        1,
        "Amine HN",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      )
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Comittee");
  }
}
