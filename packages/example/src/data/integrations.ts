export interface Integration {
  id: string;
  name: string;
  icon: string;
  description: string;
  installCommand: string;
  codeExample: string;
  notes?: string;
}

export const integrations: Integration[] = [
  {
    id: 'react',
    name: 'React',
    icon: 'fa-brands fa-react',
    description: 'Use Frostpane in React applications with standard CSS imports or CSS Modules.',
    installCommand: 'npm install frostpane',
    codeExample: `// Import the CSS in your main file (e.g., App.jsx or index.jsx)
import 'frostpane/dist/frostpane.css';

// Use the classes in your components
function GlassCard() {
  return (
    <div className="glass-container glass-container--rounded glass-container--medium">
      <div className="glass-content">
        <h3>Welcome to React</h3>
        <p>This is a glass card component.</p>
      </div>
    </div>
  );
}

export default GlassCard;`,
    notes: 'For TypeScript projects, you may need to add a declaration file for the CSS import.',
  },
  {
    id: 'vue',
    name: 'Vue',
    icon: 'fa-brands fa-vuejs',
    description: 'Integrate Frostpane seamlessly with Vue 3 applications.',
    installCommand: 'npm install frostpane',
    codeExample: `<!-- Import in your main.js or main.ts -->
<script>
import { createApp } from 'vue';
import App from './App.vue';
import 'frostpane/dist/frostpane.css';

createApp(App).mount('#app');
</script>

<!-- Use in your components -->
<template>
  <div class="glass-container glass-container--rounded glass-container--medium">
    <div class="glass-content">
      <h3>Welcome to Vue</h3>
      <p>This is a glass card component.</p>
    </div>
  </div>
</template>`,
    notes: 'Works with both Vue 3 Composition API and Options API.',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: 'fa-brands fa-angular',
    description: 'Add Frostpane to your Angular projects with ease.',
    installCommand: 'npm install frostpane',
    codeExample: `/* Add to angular.json styles array */
"styles": [
  "src/styles.css",
  "node_modules/frostpane/dist/frostpane.css"
],

/* Or import in styles.css */
@import 'frostpane/dist/frostpane.css';

<!-- Use in your components -->
<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <h3>Welcome to Angular</h3>
    <p>This is a glass card component.</p>
  </div>
</div>`,
    notes: 'Make sure to restart the dev server after modifying angular.json.',
  },
  {
    id: 'svelte',
    name: 'Svelte',
    icon: 'fa-solid fa-fire',
    description: 'Use Frostpane in Svelte and SvelteKit applications.',
    installCommand: 'npm install frostpane',
    codeExample: `<!-- Import in your +layout.svelte or main component -->
<script>
  import 'frostpane/dist/frostpane.css';
</script>

<!-- Use in your components -->
<div class="glass-container glass-container--rounded glass-container--medium">
  <div class="glass-content">
    <h3>Welcome to Svelte</h3>
    <p>This is a glass card component.</p>
  </div>
</div>`,
    notes: 'For SvelteKit, import in your root +layout.svelte file.',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: 'fa-solid fa-n',
    description: 'Integrate Frostpane with Next.js App Router or Pages Router.',
    installCommand: 'npm install frostpane',
    codeExample: `// For App Router: Import in app/layout.tsx
import 'frostpane/dist/frostpane.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// For Pages Router: Import in pages/_app.tsx
import 'frostpane/dist/frostpane.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;`,
    notes: 'Works with both App Router (Next.js 13+) and Pages Router.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: 'fa-solid fa-wind',
    description: 'Combine Frostpane with Tailwind CSS utility classes.',
    installCommand: 'npm install frostpane',
    codeExample: `/* Add to your main CSS file (e.g., globals.css) */
@import 'frostpane/dist/frostpane.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- Use Frostpane classes with Tailwind utilities -->
<div class="glass-container glass-container--rounded glass-container--medium p-6 mx-auto max-w-md">
  <div class="glass-content flex flex-col gap-4">
    <h3 class="text-2xl font-bold">Welcome to Tailwind</h3>
    <p class="text-gray-200">Combine glass effects with Tailwind utilities.</p>
  </div>
</div>`,
    notes:
      'Frostpane classes work alongside Tailwind utilities. Import Frostpane before Tailwind directives.',
  },
  {
    id: 'css-in-js',
    name: 'CSS-in-JS',
    icon: 'fa-solid fa-code',
    description: 'Use Frostpane with styled-components, Emotion, or other CSS-in-JS libraries.',
    installCommand: 'npm install frostpane',
    codeExample: `// Import the CSS in your main file
import 'frostpane/dist/frostpane.css';

// Use with styled-components
import styled from 'styled-components';

const GlassCard = styled.div.attrs({
  className: 'glass-container glass-container--rounded glass-container--medium'
})\`
  /* Add custom styles on top of Frostpane */
  padding: 2rem;
  max-width: 400px;
\`;

const GlassContent = styled.div.attrs({
  className: 'glass-content'
})\`
  display: flex;
  flex-direction: column;
  gap: 1rem;
\`;

function Component() {
  return (
    <GlassCard>
      <GlassContent>
        <h3>Styled Components</h3>
        <p>Glass effects with CSS-in-JS</p>
      </GlassContent>
    </GlassCard>
  );
}`,
    notes: 'Use className attribute to apply Frostpane classes, then add custom styles on top.',
  },
  {
    id: 'webcomponents',
    name: 'Web Components',
    icon: 'fa-solid fa-cube',
    description: 'Use Frostpane in vanilla Web Components.',
    installCommand: 'npm install frostpane',
    codeExample: `// Import in your main JavaScript file
import 'frostpane/dist/frostpane.css';

// Create a Web Component
class GlassCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`
      <div class="glass-container glass-container--rounded glass-container--medium">
        <div class="glass-content">
          <h3>Web Components</h3>
          <p>Glass effects with native Web Components</p>
        </div>
      </div>
    \`;
  }
}

customElements.define('glass-card', GlassCard);

// Use in HTML
<glass-card></glass-card>`,
    notes:
      'For Shadow DOM, you may need to import the CSS within the component or use CSS custom properties.',
  },
];
