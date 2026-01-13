import { db } from "@tailor-platform/sdk";
import { member } from "./member";
import { task } from "./task";

export const timeEntry = db.type(
  "TimeEntry",
  "Time tracking entry for a task",
  {
    memberID: db
      .uuid()
      .relation({
        type: "n-1",
        toward: { type: member },
      })
      .description("Member who logged this time"),
    taskID: db
      .uuid()
      .relation({
        type: "n-1",
        toward: { type: task },
      })
      .description("Task this time entry is linked to"),
    date: db.datetime().description("Date of the work"),
    hours: db.float().description("Number of hours worked"),
    note: db.string({ optional: true }).description("Optional note for this entry"),
    ...db.fields.timestamps(),
  },
);

