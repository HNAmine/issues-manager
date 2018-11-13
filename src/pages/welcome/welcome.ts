import { Welcome } from "./../../model/welcome.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  public welcome: Welcome = {
    id: 1,
    title: "Dear Esteemed Conference guests,",

    content: `I am honored to welcome each of you to join us at the Eastern Ophthalmology and Optometry Conference (EOC2018) that will be held (by God’s will) in AlKobar-Eastern Province, Kempinski AlOthman Hotel on  24-26 November, 2018

This conference has an exciting agenda that stresses on new exponential technology, and on creative and innovative transformation in Ophthalmology and Optometry , Interactive advanced Workshops,  Wet labs and Courses are also put up in various fields e.g. DMEK, Phaco, Strabismus, Glaucoma, Amblyopia, Congenital cataract, Uveitis, Anaplastology and Low vision

  The conference is hopefully  engaging as it will have full condensed sessions that address the depth and breadth of our work, in addition there will be considerable opportunities for networking & enjoying the Gulf region.`
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
