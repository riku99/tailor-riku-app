import { db } from "@tailor-platform/sdk";

export const client = db.type("Client", "Client organization", {
  name: db.string().description("Client name"),
  country: db.string().description("Country where the client is located"),
  annualRevenue: db.float({ optional: true }).description("Annual revenue in USD"),
  employeeCount: db.int({ optional: true }).description("Number of employees"),
  industry: db.enum(["FINANCE", "RETAIL", "MANUFACTURING", "OTHER"]).description("Industry of the client"),
  ...db.fields.timestamps(),
});

