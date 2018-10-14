import { Question } from "./../model/topic.model";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Topic } from "../model/topic.model";
import { Speaker } from "../model/speaker.model";
import { Program, ProgramItem } from "../model/program.model";
// import { Http } from "@angular/http";

@Injectable()
export class QuestionService {
  topics: Topic[] = [
    {
      id: 1,
      value: "Cataract",
      questions: [
        new Question(1, "Question 1 ?", "Details of question 1 ?"),
        new Question(2, "Question 1 ?", "Details of question 1 ?")
      ]
    },
    {
      id: 2,
      value: "Cornea",
      questions: [
        new Question(3, "Question 1 ?", "Details of question 1 ?"),
        new Question(1, "Question 1 ?", "Details of question 1 ?")
      ]
    },
    {
      id: 3,
      value: "Refractive Surgery",
      questions: [
        new Question(1, "Question 1 ?", "Details of question 1 ?"),
        new Question(1, "Question 1 ?", "Details of question 1 ?")
      ]
    },
    { id: 4, value: "Retina", questions: [] },
    { id: 5, value: "Uveitis", questions: [] },
    { id: 6, value: "Pediatric Ophthalmology", questions: [] },
    { id: 7, value: "Galucoma", questions: [] },
    { id: 8, value: "Neuro Ophthalmology", questions: [] },
    { id: 9, value: "Ocuiloplasty", questions: [] },
    { id: 10, value: "Refraction & Low vision", questions: [] },
    {
      id: 11,
      value: "Orthoptics & Contact Lens",
      questions: [
        new Question(1, "Question 1 ?", "Details of question 1 ?"),
        new Question(1, "Question 1 ?", "Details of question 1 ?")
      ]
    }
  ];
  // constructor(private _http: Http) {}

  getTopics(): Topic[] {
    // let headers = new Headers({ Accept: "application/json" });
    // return this._http.get("", { headers: headers }).map(res => res.json());
    return this.topics;
  }

  getConfig() {
    let dash: { slides: string[], speakers: Speaker[], programs: Program[], topics: Topic[] } = { slides: [], programs: [], topics: [], speakers: [] };
    dash.speakers = [
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
    dash.programs = [
      new Program(1, "Scientific Program", [
        new ProgramItem(1, "Day 1 | Saturday 17 November 2018", "https://math.unice.fr/~pauly/ca1.pdf"),
        new ProgramItem(2, "Day 2 | Saturday 24 November 2018", "https://math.unice.fr/~pauly/ca1.pdf")
      ]),

      new Program(1, "Workshop and Wet Lab Program", [
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018", null),
        new ProgramItem(1, "Day 2 | Sunday 25 November 2018", "https://math.unice.fr/~pauly/ca1.pdf")
      ])
    ];
    dash.topics = [
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
    dash.slides = ["./assets/imgs/banners/1.jpg", "./assets/imgs/banners/2.jpg", "./assets/imgs/banners/3.jpg"];
    return dash;
  }
}
