import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "dist/do-copy.js",
      format: "umd",
      name: "doCopy",
      // sourcemap: "inline"
    },
    {
      file: "dist/do-copy-iife.js",
      format: "iife",
      name: "doCopy",
      // sourcemap: "inline"
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
