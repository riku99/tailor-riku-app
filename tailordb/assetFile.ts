import { db } from "@tailor-platform/sdk";

// Reusable object for attached files (参考: example/file.ts)
export const assetFiles = db.object(
  {
    id: db.uuid(),
    name: db.string(),
    size: db.int().validate(({ value }) => value > 0),
    type: db.enum(["image", "document", "other"]),
  },
  { array: true },
);

