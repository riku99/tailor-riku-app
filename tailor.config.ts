import { defineConfig, defineStaticWebSite, } from "@tailor-platform/sdk";

const erdWebsite = defineStaticWebSite("erd", {
  description: "Erd frontend",
});

export default defineConfig({
  name: "hello-world",
  resolver: { "main-resolver": { files: [`./src/resolvers/**/*.ts`] } },
  db: {
    tailordb: { files: ["./tailordb/*.ts"] },
  },
   staticWebsites: [erdWebsite],
});
