export default class Task {
  _startDate: Date;
  _endDate: Date;

  constructor(start: Date, end: Date) {
    this._startDate = new Date(start);
    this._endDate = new Date(end);
  }

  set startDate(start: Date) {
    this._startDate = start;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set endDate(end: Date) {
    this._endDate = end;
  }

  get endDate(): Date {
    return this._endDate;
  }
  
  getDuration(): number {
    return this._endDate.getTime() - this._startDate.getTime();
  }

  update(): {
    start: string;
    end: string
    duration: number;
  } {
    return {
      start: this.startDate.toLocaleDateString("en-US"),
      end: this.endDate.toLocaleDateString("en-US"),
      duration: this.getDuration(),
    };
  }
}

const startDateTime = new Date("November 10, 2023 01:00:00");
const endDateTime = new Date("November 30, 2023 01:00:00");
const durationInSeconds = 9000;

const task = new Task(startDateTime, endDateTime);
console.log(task.update());

task.startDate = new Date("November 15, 2023 01:00:00");
console.log(task.update());

task.endDate = new Date("December 15, 2023 01:00:00");
console.log(task.update());
