import { db } from "@tailor-platform/sdk";
import { member } from "./member";
import { project } from "./project";

export const task = db.type("Task", "Task item in a project", {
  title: db.string().description("Title of the task"),
  description: db
    .string({ optional: true })
    .description("Detailed description of the task"),
  status: db
    .enum(["TODO", "IN_PROGRESS", "DONE"])
    .description("Current status of the task"),
  projectID: db
    .uuid()
    .relation({
      type: "n-1",
      toward: { type: project },
    })
    .description("Project this task belongs to"),
  assigneeID: db
    .uuid({ optional: true })
    .relation({
      type: "n-1",
      toward: { type: member },
    })
    .description("Member assigned to this task"),
  ...db.fields.timestamps(),
});

