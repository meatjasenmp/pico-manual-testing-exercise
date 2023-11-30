export default class Task {
  _startDate: Date;
  _endDate: Date;
  _duration: number | undefined | null;

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

  update(start: Date, end: Date, duration: number | null): {
    start: string;
    end: string
    durationInSeconds: number;
  } {
    
    this.startDate = new Date(start);
    this.endDate = new Date(end);
    (() => {
      if (duration && duration !== this.getDuration()) {
        console.info("duration argued is not the same as the duration calculated from start and end dates");
        this._duration = duration;
        return;
      }
      this._duration = this.getDuration();
    })();
    
    return {
      start: this.startDate.toLocaleDateString("en-US"),
      end: this.endDate.toLocaleDateString("en-US"),
      durationInSeconds: this._duration / 1000,
    };
  }
}
