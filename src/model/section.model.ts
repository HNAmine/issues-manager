import { Speaker } from "./speaker.model";
export class Section {
  id: number;
  title: string;
  programmedOn: string;
  subject: string;
  moderator: string;
  speakers: Speaker[];
  constructor(
    id: number,
    title: string,
    programmedOn: string,
    subject: string,
    moderator: string,
    speakers: Speaker[]
  ) {
    this.id = id;
    this.title = title;
    this.programmedOn = programmedOn;
    this.subject = subject;
    this.moderator = moderator;
    this.speakers = speakers;
  }
}
