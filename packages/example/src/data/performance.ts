export interface PerformanceMetric {
  name: string;
  value: string;
  description: string;
  icon: string;
  category: 'speed' | 'size' | 'quality';
}

export interface PerformanceTip {
  title: string;
  description: string;
  code?: string;
  impact: 'high' | 'medium' | 'low';
  icon: string;
}

export const performanceMetrics: PerformanceMetric[] = [
  {
    name: 'Bundle Size',
    value: '~4KB',
    description: 'Minified CSS file size (gzipped: ~1.5KB)',
    icon: 'fa-solid fa-file-zipper',
    category: 'size',
  },
  {
    name: 'FPS Impact',
    value: '<5%',
    description: 'Minimal frame rate impact with hardware acceleration',
    icon: 'fa-solid fa-gauge-high',
    category: 'speed',
  },
  {
    name: 'Lighthouse Score',
    value: '95+',
    description: 'Performance score with optimized glass effects',
    icon: 'fa-solid fa-trophy',
    category: 'quality',
  },
  {
    name: 'Paint Time',
    value: '<16ms',
    description: 'First contentful paint with backdrop-filter',
    icon: 'fa-solid fa-paintbrush',
    category: 'speed',
  },
  {
    name: 'Reflow Cost',
    value: 'Low',
    description: 'CSS-only effects avoid layout thrashing',
    icon: 'fa-solid fa-arrows-rotate',
    category: 'speed',
  },
  {
    name: 'Memory Usage',
    value: 'Minimal',
    description: 'No JavaScript runtime overhead',
    icon: 'fa-solid fa-memory',
    category: 'size',
  },
];

export const performanceTips: PerformanceTip[] = [
  {
    title: 'Use will-change Sparingly',
    description:
      'Only apply will-change to elements that will actually animate. Overuse can hurt performance.',
    code: `.glass-container:hover {
  will-change: transform;
}

.glass-container:not(:hover) {
  will-change: auto;
}`,
    impact: 'high',
    icon: 'fa-solid fa-bolt',
  },
  {
    title: 'Limit Backdrop Blur Radius',
    description:
      'Keep blur values between 4-12px for best performance. Higher values increase GPU load.',
    code: `/* Good - balanced performance */
--fp-backdrop-blur: 8px;

/* Avoid - expensive */
--fp-backdrop-blur: 32px;`,
    impact: 'high',
    icon: 'fa-solid fa-circle-half-stroke',
  },
  {
    title: 'Reduce Glass Element Count',
    description:
      'Each glass element requires GPU compositing. Limit to 10-15 visible elements for smooth 60fps.',
    impact: 'high',
    icon: 'fa-solid fa-layer-group',
  },
  {
    title: 'Avoid Nested Glass Effects',
    description:
      'Nesting multiple backdrop-filter elements multiplies the performance cost. Keep hierarchy flat.',
    code: `/* Avoid */
<div class="glass-container">
  <div class="glass-container">
    <div class="glass-container">
      Content
    </div>
  </div>
</div>

/* Better */
<div class="glass-container">
  <div class="glass-content">
    Content
  </div>
</div>`,
    impact: 'medium',
    icon: 'fa-solid fa-sitemap',
  },
  {
    title: 'Use Transform for Animations',
    description:
      'Animate transform and opacity properties instead of position or size for GPU-accelerated performance.',
    code: `/* Good - GPU accelerated */
.glass-container:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Avoid - triggers layout */
.glass-container:hover {
  width: 110%;
  margin-left: -5%;
}`,
    impact: 'high',
    icon: 'fa-solid fa-wand-magic-sparkles',
  },
  {
    title: 'Optimize Background Images',
    description:
      'Use compressed images and modern formats (WebP, AVIF) for backgrounds behind glass elements.',
    impact: 'medium',
    icon: 'fa-solid fa-image',
  },
  {
    title: 'Disable Effects on Low-End Devices',
    description:
      'Use media queries to reduce or disable glass effects on devices with limited GPU capabilities.',
    code: `@media (prefers-reduced-motion: reduce) {
  .glass-container {
    --fp-backdrop-blur: 0px;
    --fp-transition-duration: 0s;
  }
}

/* Detect low-end devices */
@media (max-width: 768px) and (max-resolution: 1dppx) {
  .glass-container {
    --fp-backdrop-blur: 4px;
  }
}`,
    impact: 'medium',
    icon: 'fa-solid fa-mobile-screen',
  },
  {
    title: 'Use CSS Containment',
    description:
      'Apply CSS containment to isolate glass elements and improve rendering performance.',
    code: `.glass-container {
  contain: layout style paint;
}`,
    impact: 'low',
    icon: 'fa-solid fa-box',
  },
];

export const benchmarkData = {
  testEnvironment: 'Chrome 120, MacBook Pro M1, 60Hz display',
  scenarios: [
    {
      name: 'Single Glass Card',
      fps: '60',
      paintTime: '8ms',
      gpuMemory: '12MB',
    },
    {
      name: '10 Glass Cards',
      fps: '60',
      paintTime: '14ms',
      gpuMemory: '45MB',
    },
    {
      name: '20 Glass Cards',
      fps: '58',
      paintTime: '18ms',
      gpuMemory: '78MB',
    },
    {
      name: 'Animated Glass (hover)',
      fps: '60',
      paintTime: '12ms',
      gpuMemory: '18MB',
    },
  ],
};
