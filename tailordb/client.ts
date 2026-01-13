import { db } from "@tailor-platform/sdk";

export const client = db.type("Client", "Client organization", {
  name: db.string().description("Client name"),
  industry: db
    .enum(["IT", "Finance", "Retail", "Manufacturing", "Other"], {
      optional: true,
    })
    .description("Industry of the client"),
  country: db.string().description("Country where the client is located"),
  annualRevenue: db.float({ optional: true }).description("Annual revenue in USD"),
  employeeCount: db.int({ optional: true }).description("Number of employees"),
  ...db.fields.timestamps(),
});

