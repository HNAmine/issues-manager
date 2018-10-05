import { QuestionService } from './../../providers/question.service';
import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  AlertController,
  ToastController
} from "ionic-angular";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: "page-list-questions",
  templateUrl: "list-questions.html"
})
export class ListQuestions {

  topics: any[] = [];
  initTopics: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private questionService:QuestionService
  ) {

  }

  ionViewDidLoad() {
    this.topics = this.questionService.getTopics();
    this.initTopics = this.topics;
  }

  search($event){
    let keyword = $event.target.value;
    if(!keyword || keyword === '' || keyword.trim() === ""){
      this.initTopic();
    }else{
      this.topics = Object.assign(this.topics.filter(topic => topic.value.toLowerCase().includes(keyword.toLowerCase())));
    }
  }

  initTopic(){
    this.topics = Object.assign(this.initTopics);
  }
}
