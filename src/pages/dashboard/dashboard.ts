import { Program, ProgramItem } from "./../../model/program.model";
import { Speaker } from "./../../model/speaker.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

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
  segment: string = "program";
  speakers: Speaker[] = [];
  programs: Program[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakers = [
      new Speaker(
        1,
        "Dr. Ahmad Mustafa",
        "Professor of Ophthalmology (Glaucoma)",
        "Cairo University",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/Dr.-Ahmed-Mostafa-Photo-350x350.jpeg"
      ),
      new Speaker(
        2,
        "Dr. Arif Khan",
        "Pediatric Ophthalmology consultant",
        "Cleveland Clinic Abu Dhabi",
        "https://www.eoc-sa.com/wp-content/uploads/2018/06/arif-khan-photo-Copy-350x350.jpg"
      ),
      new Speaker(
        3,
        "Dr. Deepak Edward",
        "Consultant OPHTHALMOLOGY (Glaucoma)",
        "Chicago, Illinois",
        "https://www.eoc-sa.com/wp-content/uploads/2018/07/Dr.-Deepak-P.-Edward-1-350x350.jpg"
      )
    ];
    this.programs = [
      new Program(1, "Scientific Program", [
        new ProgramItem(1, "Day 1 | Saturday 17 November 2018"),
        new ProgramItem(2, "Day 2 | Saturday 24 November 2018")
      ]),

      new Program(1, "Workshop and Wet Lab Program", [
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018"),
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018")
      ])
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Dashboard");
  }
}
