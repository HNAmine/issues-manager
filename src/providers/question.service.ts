import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Headers } from "@angular/http";

@Injectable()
export class QuestionService {
  uri: string = "http://event.livepresentation.net/api/";

  constructor(private _http: Http) {}

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
}
