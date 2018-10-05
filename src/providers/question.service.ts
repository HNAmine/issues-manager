import { Question } from "./../model/topic.model";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Topic } from "../model/topic.model";
// import { Http } from "@angular/http";

@Injectable()
export class QuestionService {
  topics: Topic[] = [
    {
      id: 1,
      value: "Cataract",
      questions: [
        new Question(1, "Question 1 ?", "Details of question 1 ?"),
        new Question(1, "Question 1 ?", "Details of question 1 ?")
      ]
    },
    {
      id: 2,
      value: "Cornea",
      questions: [
        new Question(1, "Question 1 ?", "Details of question 1 ?"),
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

}
