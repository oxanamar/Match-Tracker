import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      plugins: [
        [
          "babel-plugin-styled-components",
          { displayName: true, fileName: true },
        ],
      ],
    }),
  ],
});
