import { db } from "@tailor-platform/sdk";
import { assetFiles } from "./assetFile";
import { project } from "./project";

export const document = db.type("Document", "Project document with attachments", {
  projectID: db
    .uuid()
    .relation({
      type: "n-1",
      toward: { type: project },
    })
    .description("Project this document belongs to"),
  title: db.string().description("Document title"),
  category: db
    .enum(["SPEC", "REPORT", "CONTRACT", "OTHER"])
    .description("Document category"),
  attachedFiles: assetFiles,
  ...db.fields.timestamps(),
});

