![Alt text](screenshot.png)

# WordPress Full-Site Editing Theme with Svelte, Alpine.js, TailwindCSS, and SCSS

This is a powerful WordPress Full Site Editing (FSE) theme designed to support advanced JavaScript and CSS customization for building modern, interactive, and highly customizable websites. The theme integrates **Svelte**, **Alpine.js**, **TailwindCSS**, and **SCSS** to enhance custom blocks and styles while allowing developers to easily create custom interactions and layouts.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development Workflow](#development-workflow)
- [Creating Custom Blocks](#creating-custom-blocks)
- [Extending JavaScript and CSS for Blocks](#extending-javascript-and-css-for-blocks)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Full Site Editing (FSE)** support for WordPress.
- **Svelte** for building reactive and interactive components.
- **Alpine.js** for lightweight, declarative DOM manipulation.
- **TailwindCSS** for utility-first styling.
- **SCSS** for managing custom styles and theme overrides.
- **Vite** as a modern bundler for fast development and optimized production builds.
- **Hot Module Replacement (HMR)** support during development for Svelte, Tailwind, SCSS, and JavaScript files.

---

## Dependencies

This template asumes that you have ACF ( Advanced Custom Fields ) plugin installed.
I'ts used to manage the blocks activation and to create custom Field Groups for each block.

## Installation

To use this theme, you'll need to have **Node.js** and **npm** or **yarn** installed on your system.

1. Navigate into the themes folder:
   ```bash
   cd wp-content/themes/
   ```

2. Clone this repository into your WordPress `wp-content/themes/` directory:
   ```bash
   git clone https://github.com/hitaboy/bend.git your-theme-name
   ```

3. Navigate into the new theme folder:
   ```bash
   cd wp-content/themes/your-theme-name/
   ```

3. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

4. Activate the theme in WordPress:
   - Go to the WordPress dashboard.
   - Navigate to `Appearance > Themes`.
   - Find and activate your new theme.

---

## Usage

By default bend is configured for development. 

### Running the Development Server

For local development, use Vite's development server. This will allow for **live reloading** and **hot module replacement (HMR)** for JS and CSS changes.

1. Start the development server:
   ```bash
   yarn dev
   ```

2. Visit your WordPress site in the browser as usual. Vite will proxy and inject updates dynamically. Changes to Svelte components, Alpine.js code, SCSS, or Tailwind will immediately be reflected on the site without needing to reload.

### Building for Production

When you're ready to deploy the theme, you can build the assets for production:

1. Run the build command:
   ```bash
   yarn build
   ```

2. This will generate the optimized JS and CSS files in the `dist/` folder, which will be automatically enqueued by WordPress when the site is in production mode.

---

## Creating Custom Blocks

This theme supports the creation of custom WordPress blocks. You can extend the theme by adding custom blocks that use **Svelte**, **Alpine.js**, **TailwindCSS**, and **SCSS** for advanced functionality and styling.

### Example Custom Block Setup

1. Create a new block folder in the `src/blocks/` directory.
   ```bash
   mkdir bend/blocks/my-custom-block
   ```

2. Inside your custom block folder, create the following files:
   - `block.json`: Defines the block metadata.
   - `index.js`: Entry point for the block's JavaScript logic.
   - `style.scss`: SCSS file for block-specific styles.
   - `MyCustomBlock.svelte`: Svelte component for the block's frontend rendering.

3. Register the block in `src/blocks/index.js`:
   ```javascript
   import './my-custom-block';
   ```

4. Add the custom block styles and scripts to the WordPress build process, and they will be included automatically.

### Block Registration Example

In your `block.json`:
```json
{
  "apiVersion": 2,
  "name": "mytheme/my-custom-block",
  "title": "My Custom Block",
  "category": "common",
  "icon": "smiley",
  "supports": {
    "html": false
  },
  "editorScript": "file:./index.js",
  "style": "file:./style.scss"
}
```

In your `index.js`:
```js
import MyCustomBlock from './MyCustomBlock.svelte';

// You can initialize Svelte for your block's functionality here.
const target = document.querySelector('.wp-block-mytheme-my-custom-block');
if (target) {
  new MyCustomBlock({ target });
}
```

---

## Extending JavaScript and CSS for Blocks

### Custom JavaScript with Svelte or Alpine.js

Each block can include custom JavaScript using **Svelte** or **Alpine.js**.

- For **Svelte**, simply create a `.svelte` component and register it within the block.
- For **Alpine.js**, you can write declarative JavaScript directly in the block’s HTML template.

Example for Alpine.js:
```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">This content will toggle.</div>
</div>
```

### Custom Styles with TailwindCSS and SCSS

Each block can have its own SCSS file for custom styling. Additionally, **TailwindCSS** utility classes are available globally.

For example, in your `style.scss`:
```scss
.my-custom-block {
  @apply p-4 bg-gray-100 text-center; // Use Tailwind's @apply directive
}
```

The theme will automatically compile SCSS and TailwindCSS during the build process.

---

## Development Workflow

1. **Start development server**: `yarn dev`
2. **Build for production**: `yarn build`
3. **Add custom blocks**: Create new blocks in the `src/blocks/` directory.

---

## Contributing

Contributions are welcome! If you have ideas, feature requests, or find a bug, feel free to open an issue or submit a pull request.

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

---

## Next steps

Working on:

1. Parallax block
2. Slider block
3. Page transitions

---

## License

This project is licensed under the [MIT License](LICENSE).
