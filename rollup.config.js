import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import progress from 'rollup-plugin-progress';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import del from 'rollup-plugin-delete';
import external from '@yelo/rollup-node-external';
import stripBanner from 'rollup-plugin-strip-banner';
import copy from 'rollup-plugin-copy';

const packageJson = require("./package.json");
const devMode = (process.env.NODE_ENV === 'development');

console.log(`${devMode ? 'development' : 'production'} mode bundle`);

const terserSetting = {
  ecma: 2020,
  mangle: { toplevel: true },
  compress: {
    module: true,
    toplevel: true,
    unsafe_arrows: true,
    drop_console: !devMode,
    drop_debugger: !devMode
  },
  output: { quote_style: 1 }
}

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.maincjs + packageJson.name + '.development.js',
        format: "cjs",
        sourcemap: true,
        plugins: [
          getBabelOutputPlugin({
            presets: ['@babel/preset-env']
          }),
        ]
      },
      {
        file: packageJson.maincjs + packageJson.name + '.production.min.js',
        format: "cjs",
        sourcemap: false,
        plugins: [
          getBabelOutputPlugin({
            presets: ['@babel/preset-env']
          }),
          terser(terserSetting)
        ]
      }
    ],
    external: external({ whitelist: [] }),
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      resolve({ browser: true }),
      commonjs(),
      json(),
      nodePolyfills(),
      stripBanner({ exclude: 'node_modules/**/*' }),
      del({ targets: 'dist/*' }),
      copy({
        targets: [
          { src: 'public/package.json', dest: 'dist/' },
          { src: 'public/index.js', dest: 'dist/' },
          { src: 'public/LICENSE', dest: 'dist/' },
          { src: 'public/README.md', dest: 'dist/' },
        ]
      }),
      progress({ clearLine: false }),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];