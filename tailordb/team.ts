import { db } from "@tailor-platform/sdk";

export const team = db.type(
  "Team",
  "Team that groups projects and members",
  {
    name: db.string().description("Name of the team"),
    description: db
      .string({ optional: true })
      .description("Optional description of the team"),
    ...db.fields.timestamps(),
  },
);

