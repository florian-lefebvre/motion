import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  rollup: {
    emitCJS: true,
  },
  declaration: true,
  entries: [
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/index.ts',
      outDir: 'dist',
      name: 'index',
      format: 'cjs',
      ext: 'cjs',
    },
    {
      input: 'src/ssr/index.ts',
      outDir: 'dist',
      name: 'ssr',
      format: 'esm',
      ext: 'mjs',
    },
    {
      input: 'src/ssr/index.ts',
      outDir: 'dist',
      name: 'ssr',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
  externals: [
    'vue',
    'csstype',
    '@vueuse/shared',
    'framesync',
    'style-value-types',
    '@vue/compiler-core',
    '@babel/parser',
    '@vue/shared',
  ],
})
