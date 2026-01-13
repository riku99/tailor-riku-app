import { db } from "@tailor-platform/sdk";
import { team } from "./team";

export const project = db.type("Project", "Project under a team", {
  name: db.string().description("Name of the project"),
  teamID: db
    .uuid()
    .relation({
      type: "n-1",
      toward: { type: team },
    })
    .description("Team that owns this project"),
  ...db.fields.timestamps(),
});

