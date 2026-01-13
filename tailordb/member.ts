import { db } from "@tailor-platform/sdk";

export const member = db.type("Member", "Member of the workspace", {
  name: db.string().description("Name of the member"),
  email: db.string().unique().description("Email address of the member"),
  role: db.enum(["ADMIN", "MEMBER", "VIEWER"]).description("Role of the member"),
  ...db.fields.timestamps(),
});

