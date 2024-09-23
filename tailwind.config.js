module.exports = {
  content: [
    './src/**/*.{html,js,svelte,scss}',  // Include all Svelte files and SCSS files
    './**/*.php',                        // Scan all PHP files (for WordPress templates and blocks)
    './block-templates/**/*.html',       // Scan WordPress block templates
    './block-template-parts/**/*.html'   // Scan WordPress block template parts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
