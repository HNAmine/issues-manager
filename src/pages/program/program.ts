import { Program, ProgramItem } from "./../../model/program.model";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "program",
  templateUrl: "program.html"
})
export class ProgramPage {
  programs: Program[] = [];

  currentProgram: Program = null;
  currentDayIndex: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.programs.push(
      new Program(1, "Program 1", [
        new ProgramItem(1, "Day +1 (Program 1)", "pdf uri 1"),
        new ProgramItem(1, "Day +2 (Program 1)", "pdf uri 2"),
        new ProgramItem(1, "Day +3 (Program 1)", "pdf uri 3")
      ]),
      new Program(2, "Program 2", [
        new ProgramItem(1, "Day +1 (Program 2)", "pdf uri 1"),
        new ProgramItem(1, "Day +2 (Program 2)", "pdf uri 2"),
        new ProgramItem(1, "Day +3 (Program 2)", "pdf uri 3")
      ])
    );
  }

  onSelect(program: Program) {
    this.currentProgram = program;
    if (this.currentProgram.days && this.currentProgram.days.length > 0) {
      this.currentDayIndex = 1;
    }
  }

  onCancel() {
    this.currentProgram = null;
    this.currentDayIndex = null;
  }
  onBack() {
    if (this.currentDayIndex === 1) {
      this.currentDayIndex = this.currentProgram.days.length;
    } else {
      this.currentDayIndex--;
    }
  }

  onNext() {
    if (this.currentDayIndex === this.currentProgram.days.length) {
      this.currentDayIndex = 1;
    } else {
      this.currentDayIndex++;
    }
  }

  onNavigate(url: string) {
    window.open(url, "_blank");
  }
}
