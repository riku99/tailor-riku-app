import { db } from "@tailor-platform/sdk";
import { member } from "./member";
import { team } from "./team";

export const teamMember = db.type(
  "TeamMember",
  "Membership of a member in a team with role",
  {
    teamID: db
      .uuid()
      .relation({
        type: "n-1",
        toward: { type: team },
      })
      .description("Team ID"),
    memberID: db
      .uuid()
      .relation({
        type: "n-1",
        toward: { type: member },
      })
      .description("Member ID"),
    role: db
      .enum(["ADMIN", "MEMBER", "VIEWER"])
      .description("Role of the member in the team"),
    ...db.fields.timestamps(),
  },
);

