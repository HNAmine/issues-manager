import { Contact } from "./../../model/contact.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  contact: Contact = new Contact(
    1,
    "info@eoc-sa.com",
    "+966 570391334",
    "Saudi Arabia , Eastern Province , Khobar",
    "www.facebook.com",
    "www.twitter.com"
  );

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onNavigate(url: string) {
    window.open(url, "_blank");
  }
}
