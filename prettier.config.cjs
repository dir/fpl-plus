// @ts-check

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "^~/styles/(.*)$",
    "",
    "^~/env(.*)$",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
    "^~/hooks/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/app/(.*)$",
    "^[./]",
    "",
    "<TYPES>^(node:)", // Node.js types
    "<TYPES>", // TypeScript types
    "<TYPES>^[.]", // Our types
    "^types$",
    "^~/types/(.*)$",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
