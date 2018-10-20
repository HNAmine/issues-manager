import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Headers } from "@angular/http";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuestionService {
  uri: string = "http://event.livepresentation.net/api/";

  currentIcons$ = new Subject<any>();

  constructor(private _http: Http) {}

  sendCurrentIcons(icon: any) {
    this.currentIcons$.next(icon);
  }

  getCurrentIcons(): Observable<any> {
    return this.currentIcons$.asObservable();
  }

  getTopics() {
    let headers = new Headers({ Accept: "application/json" });
    return this._http
      .get(this.uri + "/listQuestions.php", {
        headers: headers
      })
      .map(res => res.json());
  }

  getConfig() {
    let headers = new Headers({ Accept: "application/json" });
    return this._http
      .get(this.uri + "/dashbord.php", {
        headers: headers
      })
      .map(res => res.json());
  }

  addQuestion(request){
    let headers = new Headers({ Accept: "application/json" });
    return this._http
      .post(this.uri + "/addQuestion.php", request ,{
        headers: headers
      })
  }
}
