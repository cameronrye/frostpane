export interface BestPractice {
  title: string;
  description: string;
  dos: string[];
  donts: string[];
  example?: string;
  category: 'design' | 'performance' | 'accessibility' | 'ux';
  icon: string;
}

export const bestPractices: BestPractice[] = [
  {
    title: 'When to Use Glass Effects',
    description:
      'Glass effects work best for overlays, modals, navigation, and cards that sit above rich backgrounds.',
    dos: [
      'Use for navigation bars and sidebars',
      'Apply to modal dialogs and popups',
      'Create floating cards and panels',
      'Enhance hero sections with glass overlays',
    ],
    donts: [
      "Don't use for primary content areas",
      "Don't apply to text-heavy sections",
      "Don't use on plain solid backgrounds",
      "Don't overuse throughout entire page",
    ],
    category: 'design',
    icon: 'fa-solid fa-lightbulb',
  },
  {
    title: 'Layering Principles',
    description:
      'Establish clear visual hierarchy by varying blur intensity, opacity, and elevation.',
    dos: [
      'Use stronger blur for background elements',
      'Apply lighter blur for foreground elements',
      'Increase opacity for interactive elements',
      'Add shadows to establish depth',
    ],
    donts: [
      "Don't use same blur value for all layers",
      "Don't stack too many glass layers",
      "Don't mix glass with flat design randomly",
      "Don't ignore z-index relationships",
    ],
    example: `/* Background layer */
.glass-bg {
  --fp-backdrop-blur: 12px;
  --fp-bg-color: rgba(255, 255, 255, 0.1);
}

/* Foreground layer */
.glass-fg {
  --fp-backdrop-blur: 6px;
  --fp-bg-color: rgba(255, 255, 255, 0.2);
}`,
    category: 'design',
    icon: 'fa-solid fa-layer-group',
  },
  {
    title: 'Readability First',
    description:
      'Ensure text remains legible by maintaining sufficient contrast and avoiding excessive blur.',
    dos: [
      'Test contrast ratios (WCAG AA: 4.5:1)',
      'Use darker backgrounds for light text',
      'Add text shadows for better separation',
      'Provide high-contrast mode option',
    ],
    donts: [
      "Don't place text directly on blurred areas",
      "Don't use low-opacity text on glass",
      "Don't rely solely on color for information",
      "Don't ignore accessibility guidelines",
    ],
    example: `/* Good contrast */
.glass-container {
  --fp-bg-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}`,
    category: 'accessibility',
    icon: 'fa-solid fa-eye',
  },
  {
    title: 'Performance Optimization',
    description:
      'Balance visual appeal with performance by limiting blur radius and element count.',
    dos: [
      'Keep blur values between 4-12px',
      'Limit visible glass elements to 10-15',
      'Use hardware-accelerated properties',
      'Test on mid-range devices',
    ],
    donts: [
      "Don't exceed 16px blur radius",
      "Don't nest multiple glass effects",
      "Don't animate expensive properties",
      "Don't ignore mobile performance",
    ],
    category: 'performance',
    icon: 'fa-solid fa-gauge-high',
  },
  {
    title: 'Mobile-First Approach',
    description:
      'Design for mobile devices first, then enhance for larger screens and more powerful hardware.',
    dos: [
      'Reduce blur on mobile devices',
      'Simplify animations for touch',
      'Test on actual mobile devices',
      'Provide fallbacks for older browsers',
    ],
    donts: [
      "Don't assume all devices support backdrop-filter",
      "Don't use same blur values across breakpoints",
      "Don't ignore touch target sizes",
      "Don't forget landscape orientation",
    ],
    example: `/* Mobile-first responsive blur */
.glass-container {
  --fp-backdrop-blur: 4px;
}

@media (min-width: 768px) {
  .glass-container {
    --fp-backdrop-blur: 8px;
  }
}

@media (min-width: 1024px) {
  .glass-container {
    --fp-backdrop-blur: 12px;
  }
}`,
    category: 'design',
    icon: 'fa-solid fa-mobile-screen',
  },
  {
    title: 'Common Mistakes to Avoid',
    description: 'Learn from common pitfalls to create better glass effect implementations.',
    dos: [
      'Test with various background images',
      'Validate color contrast ratios',
      'Profile performance regularly',
      'Gather user feedback',
    ],
    donts: [
      "Don't use glass on every element",
      "Don't ignore browser compatibility",
      "Don't forget hover/focus states",
      "Don't skip user testing",
    ],
    category: 'ux',
    icon: 'fa-solid fa-triangle-exclamation',
  },
  {
    title: 'Color and Tinting',
    description:
      'Use subtle color tints to enhance brand identity while maintaining the glass aesthetic.',
    dos: [
      'Use brand colors with low opacity',
      'Match tint to background mood',
      'Test with different backgrounds',
      'Keep saturation moderate',
    ],
    donts: [
      "Don't use highly saturated colors",
      "Don't mix too many color tints",
      "Don't ignore color blindness",
      "Don't forget dark mode variants",
    ],
    example: `/* Subtle brand tint */
.glass-branded {
  --fp-bg-color: rgba(102, 126, 234, 0.2);
  --fp-highlight: rgba(255, 255, 255, 0.3);
}`,
    category: 'design',
    icon: 'fa-solid fa-palette',
  },
  {
    title: 'Interactive States',
    description:
      'Provide clear visual feedback for hover, focus, and active states on interactive glass elements.',
    dos: [
      'Increase opacity on hover',
      'Add subtle scale transform',
      'Enhance border on focus',
      'Use smooth transitions',
    ],
    donts: [
      "Don't make drastic changes",
      "Don't ignore keyboard navigation",
      "Don't use only color changes",
      "Don't forget active states",
    ],
    example: `/* Interactive feedback */
.glass-button {
  transition: all 0.3s ease;
}

.glass-button:hover {
  --fp-bg-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.glass-button:focus {
  outline: 2px solid var(--fp-primary);
  outline-offset: 2px;
}`,
    category: 'ux',
    icon: 'fa-solid fa-hand-pointer',
  },
];

export const designGuidelines = {
  title: 'Design Guidelines',
  sections: [
    {
      name: 'Visual Hierarchy',
      description: 'Use blur intensity and opacity to create depth and guide user attention.',
    },
    {
      name: 'Consistency',
      description: 'Maintain consistent glass styling across similar UI elements.',
    },
    {
      name: 'Context',
      description: 'Ensure glass effects enhance rather than distract from content.',
    },
    {
      name: 'Accessibility',
      description:
        'Always prioritize readability and provide alternatives for users who need them.',
    },
  ],
};
