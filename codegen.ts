import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://commandline.cafe/graphql",
  generates: {
    "src/api/graphql.ts": {
      plugins: ["typescript"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
