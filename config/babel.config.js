import styleXPlugin from "@stylexjs/babel-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");

export default {
  presets: [
    ["@babel/preset-env", { modules: false }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      styleXPlugin,
      {
        dev: true,
        test: false,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: projectRoot,
        },
      },
    ],
  ],
};
