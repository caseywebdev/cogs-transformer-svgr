export default {
  transformers: {
    name: 'index.js',
    options: {
      jsxRuntime: 'automatic',
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx']
    }
  }
};
