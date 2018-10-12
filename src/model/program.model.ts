export class ProgramItem {
  id: number;
  title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}


export class Program {
  id: number;
  title: string;
  days: ProgramItem[];
  constructor(id: number, title: string,days: ProgramItem[]) {
    this.id = id;
    this.title = title;
    this.days = days;
  }
}
