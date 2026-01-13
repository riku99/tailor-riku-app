import { db } from "@tailor-platform/sdk";
import { client } from "./client";
import { project } from "./project";

export const projectBudget = db.type(
  "ProjectBudget",
  "Budget information for a project",
  {
    projectID: db
      .uuid()
      .relation({
        type: "1-1",
        toward: { type: project },
      })
      .description("Project this budget belongs to"),
    clientID: db
      .uuid({ optional: true })
      .relation({
        type: "n-1",
        toward: { type: client },
      })
      .description("Client that requested the project"),
    plannedBudget: db
      .float()
      .description("Planned budget amount in USD"),
    actualCost: db
      .float({ optional: true })
      .description("Actual cost spent in USD"),
    currency: db
      .enum(["USD", "EUR", "JPY"])
      .description("Currency of the budget"),
    ...db.fields.timestamps(),
  },
);

