export interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  changes: {
    category: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
    items: string[];
  }[];
  breaking?: string[];
  migration?: string;
}

export const changelog: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2025-01-15',
    type: 'major',
    changes: [
      {
        category: 'added',
        items: [
          'Initial stable release',
          'Core glassmorphism CSS variables',
          'Pre-built glass container classes',
          'Semantic color system',
          'Responsive spacing scale',
          'Typography utilities',
          'Animation and transition system',
          'Browser compatibility fallbacks',
        ],
      },
      {
        category: 'added',
        items: [
          'Comprehensive documentation site',
          'Interactive playground',
          'Component examples',
          'Use case showcases',
          'Tutorial guides',
        ],
      },
    ],
  },
  {
    version: '0.9.0',
    date: '2025-01-10',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'Semantic color variables (success, warning, error, info)',
          'Enhanced shadow system with multiple layers',
          'Animation presets for common interactions',
          'Accessibility improvements',
        ],
      },
      {
        category: 'changed',
        items: [
          'Optimized default blur values for better performance',
          'Improved color contrast ratios',
          'Updated documentation with more examples',
        ],
      },
      {
        category: 'fixed',
        items: [
          'Safari backdrop-filter rendering issues',
          'Firefox compatibility improvements',
          'Mobile performance optimizations',
        ],
      },
    ],
  },
  {
    version: '0.8.0',
    date: '2025-01-05',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'Typography scale with CSS variables',
          'Spacing system (--fp-space-*)',
          'Border radius utilities',
          'Z-index scale',
        ],
      },
      {
        category: 'changed',
        items: [
          'Renamed some color variables for consistency',
          'Updated default transition timing',
        ],
      },
    ],
    breaking: ['--glass-bg renamed to --fp-bg-color', '--glass-blur renamed to --fp-backdrop-blur'],
    migration: `Update your CSS variable names:
    
/* Before */
.my-glass {
  --glass-bg: rgba(255, 255, 255, 0.3);
  --glass-blur: 10px;
}

/* After */
.my-glass {
  --fp-bg-color: rgba(255, 255, 255, 0.3);
  --fp-backdrop-blur: 10px;
}`,
  },
  {
    version: '0.7.0',
    date: '2024-12-28',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'Pre-built component classes',
          'Glass button styles',
          'Glass card variations',
          'Navigation bar examples',
        ],
      },
      {
        category: 'fixed',
        items: [
          'Edge cases with nested glass elements',
          'Performance issues with many glass elements',
        ],
      },
    ],
  },
  {
    version: '0.6.0',
    date: '2024-12-20',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: ['Interactive example site', 'Live playground', 'API documentation'],
      },
      {
        category: 'changed',
        items: ['Improved default glass effect values', 'Better mobile performance'],
      },
    ],
  },
  {
    version: '0.5.0',
    date: '2024-12-15',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'CSS custom properties for all glass effects',
          'Hover and focus state styles',
          'Transition animations',
        ],
      },
      {
        category: 'fixed',
        items: ['Browser prefix issues', 'Color opacity calculations'],
      },
    ],
  },
  {
    version: '0.4.0',
    date: '2024-12-10',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'Multiple glass effect variations',
          'Color tinting support',
          'Shadow customization',
        ],
      },
    ],
  },
  {
    version: '0.3.0',
    date: '2024-12-05',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: [
          'Basic glass container class',
          'Backdrop blur support',
          'Border and shadow effects',
        ],
      },
      {
        category: 'changed',
        items: ['Simplified CSS structure', 'Improved documentation'],
      },
    ],
  },
  {
    version: '0.2.0',
    date: '2024-12-01',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: ['Initial glassmorphism implementation', 'Basic CSS variables', 'Simple examples'],
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2024-11-25',
    type: 'minor',
    changes: [
      {
        category: 'added',
        items: ['Project initialization', 'Basic project structure', 'Initial documentation'],
      },
    ],
  },
];

export const upcomingFeatures = [
  {
    title: 'Theme Presets',
    description: 'Pre-configured theme packages for common use cases',
    status: 'planned',
    version: '1.1.0',
  },
  {
    title: 'SCSS Mixins',
    description: 'Sass mixins for easier customization',
    status: 'planned',
    version: '1.1.0',
  },
  {
    title: 'React Components',
    description: 'Optional React component library',
    status: 'considering',
    version: '2.0.0',
  },
  {
    title: 'Vue Components',
    description: 'Optional Vue component library',
    status: 'considering',
    version: '2.0.0',
  },
  {
    title: 'Advanced Animations',
    description: 'More complex animation presets and utilities',
    status: 'planned',
    version: '1.2.0',
  },
];
