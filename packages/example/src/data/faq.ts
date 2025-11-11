export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'performance' | 'compatibility' | 'customization' | 'accessibility';
  code?: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How does backdrop-filter affect performance?',
    answer:
      'Backdrop-filter is GPU-accelerated in modern browsers, making it relatively performant. However, it can impact performance on lower-end devices, especially with high blur values (>10px). For best performance, use moderate blur values (4-8px) and limit the number of glass elements on screen simultaneously.',
    category: 'performance',
  },
  {
    question: 'Can I use Frostpane with React, Vue, or other frameworks?',
    answer:
      'Yes! Frostpane is framework-agnostic and works with any JavaScript framework or vanilla HTML. Simply import the CSS file and apply the classes to your components. The library uses standard CSS classes, so it integrates seamlessly with React, Vue, Angular, Svelte, and any other framework.',
    category: 'general',
    code: `// React example
import '@frostpane/core/css';

function MyComponent() {
  return (
    <div className="glass-container glass-container--rounded">
      <div className="glass-content">
        Hello, Frostpane!
      </div>
    </div>
  );
}`,
  },
  {
    question: 'What browsers support glass effects?',
    answer:
      'Glass effects using backdrop-filter are supported in Chrome 76+, Edge 79+, Safari 9+ (with -webkit- prefix), Firefox 103+, and Opera 63+. Mobile support is excellent on iOS Safari 9+ and Android Chrome 76+. For unsupported browsers, the effect gracefully degrades to a semi-transparent background.',
    category: 'compatibility',
  },
  {
    question: 'How do I customize the blur intensity?',
    answer:
      'You can customize blur intensity using the --fp-backdrop-blur CSS variable. Set it inline or in your stylesheet. Values typically range from 2px (subtle) to 16px (heavy frost). Higher values create stronger blur but may impact performance.',
    category: 'customization',
    code: `/* Method 1: Inline style */
<div class="glass-container" style="--fp-backdrop-blur: 12px;">
  ...
</div>

/* Method 2: CSS class */
.my-glass {
  --fp-backdrop-blur: 12px;
}`,
  },
  {
    question: 'Are glass effects accessible?',
    answer:
      'Glass effects can be accessible when implemented correctly. Ensure sufficient color contrast between text and background (WCAG AA: 4.5:1 for normal text). Use darker or more opaque backgrounds for text content, provide focus indicators, and test with screen readers. Frostpane includes proper focus states and can be customized for high contrast modes.',
    category: 'accessibility',
  },
  {
    question: 'Can I animate glass properties?',
    answer:
      'Yes! Most glass properties can be animated smoothly. Frostpane includes transition variables for easy customization. You can animate blur, opacity, colors, shadows, and transforms. However, animating backdrop-filter can be performance-intensive, so use it sparingly.',
    category: 'customization',
    code: `/* Animate blur on hover */
.glass-container {
  --fp-backdrop-blur: 4px;
  transition: backdrop-filter 0.3s ease;
}

.glass-container:hover {
  --fp-backdrop-blur: 12px;
}`,
  },
  {
    question: 'How do I layer multiple glass elements?',
    answer:
      'Layering glass elements creates depth and visual hierarchy. Use z-index to control stacking order, and adjust opacity and blur for each layer. Elements closer to the viewer typically have less blur and more opacity.',
    category: 'customization',
    code: `/* Background layer */
.glass-layer-back {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(255, 255, 255, 0.2);
  z-index: 1;
}

/* Foreground layer */
.glass-layer-front {
  --fp-backdrop-blur: 4px;
  --fp-bg-color: rgba(255, 255, 255, 0.3);
  z-index: 2;
}`,
  },
  {
    question: 'What is the bundle size of Frostpane?',
    answer:
      'The compiled CSS file is approximately 8-10KB uncompressed and ~2KB gzipped. The library has zero JavaScript dependencies and uses only CSS, making it extremely lightweight and fast to load.',
    category: 'performance',
  },
  {
    question: 'How do I handle browser compatibility issues?',
    answer:
      'Frostpane automatically includes vendor prefixes for Safari. For older browsers without backdrop-filter support, use @supports queries to provide fallback styles. The library gracefully degrades to semi-transparent backgrounds in unsupported browsers.',
    category: 'compatibility',
    code: `/* Fallback for unsupported browsers */
@supports not (backdrop-filter: blur(10px)) {
  .glass-container {
    background: rgba(255, 255, 255, 0.4);
  }
}`,
  },
  {
    question: 'Can I use Frostpane with Tailwind CSS?',
    answer:
      'Yes! You can use Frostpane alongside Tailwind CSS. Import the Frostpane CSS and use the glass classes together with Tailwind utility classes. You can also extend Tailwind config to include Frostpane variables.',
    category: 'general',
    code: `<!-- Combining Frostpane with Tailwind -->
<div class="glass-container glass-container--rounded p-6 mx-auto max-w-md">
  <div class="glass-content">
    <h2 class="text-2xl font-bold">Hello!</h2>
  </div>
</div>`,
  },
  {
    question: 'How do I create colored glass effects?',
    answer:
      'Customize the --fp-bg-color variable with your desired color and opacity. You can use any RGBA color value. Combine with --fp-filter-saturate to enhance color vibrancy.',
    category: 'customization',
    code: `/* Blue tinted glass */
.blue-glass {
  --fp-bg-color: rgba(102, 126, 234, 0.3);
  --fp-filter-saturate: 140%;
}

/* Red tinted glass */
.red-glass {
  --fp-bg-color: rgba(251, 66, 104, 0.3);
  --fp-filter-saturate: 130%;
}`,
  },
  {
    question: 'Why is my glass effect not showing?',
    answer:
      'Common issues: 1) The element needs content behind it to blur - glass effects are transparent. 2) Check browser support for backdrop-filter. 3) Ensure the CSS is properly imported. 4) Verify z-index stacking context. 5) Check if parent elements have overflow: hidden which can clip the blur effect.',
    category: 'general',
  },
  {
    question: 'How do I optimize performance for mobile devices?',
    answer:
      'For mobile optimization: 1) Use lower blur values (4-6px instead of 10-12px). 2) Reduce the number of glass elements on screen. 3) Avoid animating backdrop-filter. 4) Use will-change: transform for animated elements. 5) Test on actual devices, not just emulators.',
    category: 'performance',
  },
];
