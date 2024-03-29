import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg6idcnc0tde01t3cvzvgg5l/master",
  documents: "./src/**/*.graphql",
  generates: {
    "src/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "fragment-matcher",
        "named-operations-object",
      ],
      config: {
        apolloClientVersion: 3,
        useExplicitTyping: true,
        scalars: {
          JSON: "string",
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;