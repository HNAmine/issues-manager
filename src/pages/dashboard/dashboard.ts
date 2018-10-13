
import { Program, ProgramItem } from "./../../model/program.model";
import { Speaker } from "./../../model/speaker.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Topic } from "../../model/topic.model";

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
  dash: { slides: string[], speakers: Speaker[], programs: Program[], topics: Topic[] } = { slides: [], programs: [], topics: [], speakers: [] };
  segment: string = "program";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dash.speakers = [
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
    this.dash.programs = [
      new Program(1, "Scientific Program", [
        new ProgramItem(1, "Day 1 | Saturday 17 November 2018", "https://math.unice.fr/~pauly/ca1.pdf"),
        new ProgramItem(2, "Day 2 | Saturday 24 November 2018", "https://math.unice.fr/~pauly/ca1.pdf")
      ]),

      new Program(1, "Workshop and Wet Lab Program", [
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018", null),
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018", "https://math.unice.fr/~pauly/ca1.pdf")
      ])
    ];
    this.dash.topics = [
      {
        id: 1,
        value: "Cataract"
      },
      {
        id: 2,
        value: "Cornea"
      },
      {
        id: 3,
        value: "Refractive Surgery"
      },
      { id: 4, value: "Retina" },
      { id: 5, value: "Uveitis" },
      { id: 6, value: "Pediatric Ophthalmology" },
      { id: 7, value: "Galucoma" },
      { id: 8, value: "Neuro Ophthalmology" }
    ];
    this.dash.slides = ["./assets/imgs/banners/1.jpg", "./assets/imgs/banners/2.jpg", "./assets/imgs/banners/3.jpg"];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Dashboard");
  }

  onNavigate(url: string) {
    window.open(url, "_blank");
  }
}
