import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',         // Your main entry point
  output: [
    {
      file: 'dist/index.cjs.js',  // CommonJS output
      format: 'cjs',              // CommonJS format
      sourcemap: true             // Source maps for debugging
    },
    {
      file: 'dist/index.js',      // ES module output
      format: 'esm',              // ES module format
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),                    // Resolve Node.js-style modules
    commonjs(),                   // Convert CommonJS to ES modules
    typescript({ tsconfig: "./tsconfig.json" })  // Use the existing tsconfig.json
  ],
  external: ['react', 'react-dom', '@emotion/react', '@emotion/styled']  // Mark external dependencies
};
