import Task from '../src/task';
import {describe, expect, it} from '@jest/globals';

const startDateTime = new Date("November 10, 2023 01:00:00");
const endDateTime = new Date("November 30, 2023 01:00:00");

describe('Task', () => {
  const task = new Task(startDateTime, endDateTime);

  it("should have a start date", () => {
    expect(task.startDate).toEqual(startDateTime);
  });

  it("should have an end date", () => {
    expect(task.endDate).toEqual(endDateTime);
  });
  
  it("should have a duration", () => {
    expect(task.getDuration()).toEqual(endDateTime.getTime() - startDateTime.getTime());
  });

  it("should update the start date and have the correct duration", () => {
    const newStartDateTime = new Date("November 15, 2023 01:00:00");
    task.update(newStartDateTime, endDateTime, null);
    expect(task.startDate).toEqual(newStartDateTime);
    expect(task.getDuration()).toEqual(task.endDate.getTime() - newStartDateTime.getTime());
  });

  it("should update the end date and have the correct duration", () => {
    const newEndDateTime = new Date("December 15, 2023 01:00:00");
    task.update(startDateTime, newEndDateTime, null);
    expect(task.endDate).toEqual(newEndDateTime);
    expect(task.getDuration()).toEqual(newEndDateTime.getTime() - task.startDate.getTime());
  });

  it("should update the start and end date and have the correct duration", () => {
    const newStartDateTime = new Date("November 15, 2023 01:00:00");
    const newEndDateTime = new Date("December 15, 2023 01:00:00");
    task.update(newStartDateTime, newEndDateTime, null);
    expect(task.startDate).toEqual(newStartDateTime);
    expect(task.endDate).toEqual(newEndDateTime);
    expect(task.getDuration()).toEqual(newEndDateTime.getTime() - newStartDateTime.getTime());
  });

  it("should have the correct duration", () => {
    const newStartDateTime = new Date("November 15, 2023 01:00:00");
    const newEndDateTime = new Date("December 15, 2023 01:00:00");
    task.update(newStartDateTime, newEndDateTime, null);
    expect(task.getDuration()).toEqual(newEndDateTime.getTime() - newStartDateTime.getTime());
  });
  
  it("should have the correct duration argued", () => {
    const newStartDateTime = new Date("November 15, 2023 01:00:00");
    const newEndDateTime = new Date("December 15, 2023 01:00:00");
    const duration = 9000
    expect(task.update(newStartDateTime, newEndDateTime, duration).durationInSeconds).toEqual(duration / 1000);
  });
  
  it("should log a message if the duration argued is not the same as the duration calculated from start and end dates", () => {
    const newStartDateTime = new Date("November 15, 2023 01:00:00");
    const newEndDateTime = new Date("December 15, 2023 01:00:00");
    const duration = 9000
    const spy = jest.spyOn(console, 'info');
    task.update(newStartDateTime, newEndDateTime, duration);
    expect(spy).toHaveBeenCalledWith("duration argued is not the same as the duration calculated from start and end dates");
  });
});
