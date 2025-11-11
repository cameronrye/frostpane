export interface TroubleshootingIssue {
  problem: string;
  symptoms: string[];
  causes: string[];
  solutions: string[];
  code?: string;
  category: 'visual' | 'performance' | 'compatibility' | 'implementation';
  icon: string;
}

export const troubleshootingIssues: TroubleshootingIssue[] = [
  {
    problem: 'Backdrop Blur Not Working',
    symptoms: [
      'Glass effect appears as solid color',
      'No blur visible behind element',
      'Background is not blurred',
    ],
    causes: [
      'Browser does not support backdrop-filter',
      'Element lacks proper background color',
      'Parent element has transform applied',
      'Missing isolation context',
    ],
    solutions: [
      'Check browser compatibility (caniuse.com/backdrop-filter)',
      'Ensure element has background-color with alpha',
      'Remove transforms from parent elements',
      'Add isolation: isolate to parent',
      'Use @supports to provide fallback',
    ],
    code: `/* Check support and provide fallback */
.glass-container {
  background: rgba(255, 255, 255, 0.7);
}

@supports (backdrop-filter: blur(10px)) {
  .glass-container {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.3);
  }
}

/* Fix parent transform issue */
.parent {
  /* Remove or move transform */
  /* transform: translateZ(0); */
  isolation: isolate;
}`,
    category: 'compatibility',
    icon: 'fa-solid fa-circle-half-stroke',
  },
  {
    problem: 'Poor Performance / Lag',
    symptoms: ['Scrolling is janky', 'Animations stutter', 'Page feels slow', 'High CPU/GPU usage'],
    causes: [
      'Too many glass elements',
      'Excessive blur radius',
      'Nested glass effects',
      'Animating expensive properties',
    ],
    solutions: [
      'Reduce number of glass elements to 10-15',
      'Lower blur radius to 4-8px',
      'Avoid nesting backdrop-filter elements',
      'Use transform and opacity for animations',
      'Add will-change only when needed',
      'Test on mid-range devices',
    ],
    code: `/* Optimize for performance */
.glass-container {
  --fp-backdrop-blur: 6px; /* Reduced from 16px */
  contain: layout style paint;
}

/* Only add will-change on hover */
.glass-container:hover {
  will-change: transform;
}

.glass-container:not(:hover) {
  will-change: auto;
}`,
    category: 'performance',
    icon: 'fa-solid fa-gauge-high',
  },
  {
    problem: 'Text is Hard to Read',
    symptoms: [
      'Low contrast between text and background',
      'Text appears washed out',
      'Fails accessibility checks',
    ],
    causes: [
      'Insufficient background opacity',
      'Poor color contrast',
      'Background too busy',
      'Missing text shadows',
    ],
    solutions: [
      'Increase background opacity',
      'Use darker background for light text',
      'Add text-shadow for separation',
      'Test contrast ratios (WCAG AA: 4.5:1)',
      'Simplify background behind text',
    ],
    code: `/* Improve text readability */
.glass-container {
  --fp-bg-color: rgba(0, 0, 0, 0.6); /* Darker */
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

/* Or add a semi-opaque layer */
.glass-content {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
}`,
    category: 'visual',
    icon: 'fa-solid fa-eye-slash',
  },
  {
    problem: 'Glass Effect Looks Pixelated',
    symptoms: ['Blurred edges appear blocky', 'Low quality blur effect', 'Visible artifacts'],
    causes: [
      'Browser rendering optimization',
      'Low device pixel ratio',
      'GPU limitations',
      'Excessive blur radius',
    ],
    solutions: [
      'Reduce blur radius slightly',
      'Use even pixel values (4px, 6px, 8px)',
      'Test on different devices',
      'Accept browser limitations',
    ],
    code: `/* Use optimal blur values */
.glass-container {
  --fp-backdrop-blur: 8px; /* Even value */
  /* Avoid: 7.5px, 9.3px, etc. */
}`,
    category: 'visual',
    icon: 'fa-solid fa-image',
  },
  {
    problem: 'Colors Look Different Than Expected',
    symptoms: [
      'Glass tint does not match design',
      'Colors appear washed out',
      'Inconsistent appearance across browsers',
    ],
    causes: [
      'Color space differences',
      'Browser color management',
      'Background affects perceived color',
      'Opacity and blur interaction',
    ],
    solutions: [
      'Test with multiple backgrounds',
      'Adjust saturation and brightness',
      'Use HSL for easier color control',
      'Test in different browsers',
    ],
    code: `/* Better color control with HSL */
.glass-container {
  --fp-bg-color: hsla(220, 70%, 50%, 0.3);
  --fp-filter-saturate: 120%;
  --fp-filter-brightness: 1.1;
}`,
    category: 'visual',
    icon: 'fa-solid fa-palette',
  },
  {
    problem: 'Safari-Specific Issues',
    symptoms: [
      'Glass effect looks different in Safari',
      'Blur not rendering correctly',
      'Performance worse than other browsers',
    ],
    causes: [
      'Safari uses different rendering engine',
      'Webkit-specific backdrop-filter behavior',
      'Different GPU acceleration',
    ],
    solutions: [
      'Use -webkit-backdrop-filter prefix (Frostpane includes this)',
      'Test specifically in Safari',
      'Reduce blur radius for Safari if needed',
      'Check for webkit-specific bugs',
    ],
    code: `/* Frostpane already includes prefixes */
.glass-container {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

/* Safari-specific adjustment if needed */
@supports (-webkit-backdrop-filter: blur(1px)) {
  .glass-container {
    --fp-backdrop-blur: 6px;
  }
}`,
    category: 'compatibility',
    icon: 'fa-brands fa-safari',
  },
  {
    problem: 'Firefox Compatibility',
    symptoms: ['Backdrop-filter not working in Firefox', 'Glass appears as solid color'],
    causes: [
      'Firefox requires backdrop-filter to be enabled',
      'Older Firefox versions lack support',
    ],
    solutions: [
      'Check Firefox version (supported in 103+)',
      'Provide fallback for older versions',
      'Test with layout.css.backdrop-filter.enabled flag',
    ],
    code: `/* Provide fallback for Firefox */
.glass-container {
  background: rgba(255, 255, 255, 0.8);
}

@supports (backdrop-filter: blur(10px)) {
  .glass-container {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.3);
  }
}`,
    category: 'compatibility',
    icon: 'fa-brands fa-firefox',
  },
  {
    problem: 'Mobile Device Issues',
    symptoms: ['Severe performance problems on mobile', 'Battery drain', 'Overheating'],
    causes: ['Limited GPU on mobile devices', 'Too many glass elements', 'High blur radius'],
    solutions: [
      'Reduce blur radius on mobile (4-6px)',
      'Limit glass elements on small screens',
      'Disable animations on low-end devices',
      'Use media queries for device-specific styles',
    ],
    code: `/* Mobile optimization */
.glass-container {
  --fp-backdrop-blur: 4px;
}

@media (min-width: 768px) {
  .glass-container {
    --fp-backdrop-blur: 8px;
  }
}

/* Disable for low-end devices */
@media (prefers-reduced-motion: reduce) {
  .glass-container {
    --fp-backdrop-blur: 0px;
    background: rgba(255, 255, 255, 0.9);
  }
}`,
    category: 'performance',
    icon: 'fa-solid fa-mobile-screen',
  },
];

export const debuggingTips = [
  {
    title: 'Use Browser DevTools',
    description: 'Inspect elements and check computed styles to verify backdrop-filter is applied.',
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Test Browser Support',
    description: 'Visit caniuse.com/backdrop-filter to check support for target browsers.',
    icon: 'fa-solid fa-browser',
  },
  {
    title: 'Check Parent Transforms',
    description:
      'Parent elements with transform can break backdrop-filter. Use isolation: isolate.',
    icon: 'fa-solid fa-sitemap',
  },
  {
    title: 'Profile Performance',
    description: 'Use Chrome DevTools Performance tab to identify rendering bottlenecks.',
    icon: 'fa-solid fa-chart-line',
  },
  {
    title: 'Test on Real Devices',
    description: 'Emulators do not accurately represent mobile GPU performance.',
    icon: 'fa-solid fa-mobile-screen',
  },
];
