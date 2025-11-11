export interface Resource {
  title: string;
  description: string;
  url: string;
  category: 'article' | 'library' | 'tool' | 'inspiration';
  icon: string;
  tags: string[];
}

export const resources: Resource[] = [
  {
    title: 'Glassmorphism in User Interfaces',
    description: 'Comprehensive guide to glassmorphism design principles and best practices.',
    url: 'https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9',
    category: 'article',
    icon: 'fa-solid fa-book',
    tags: ['design', 'ui', 'principles'],
  },
  {
    title: 'CSS backdrop-filter on MDN',
    description: 'Official documentation for the backdrop-filter CSS property.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
    category: 'article',
    icon: 'fa-solid fa-file-code',
    tags: ['css', 'documentation', 'reference'],
  },
  {
    title: 'Can I Use: backdrop-filter',
    description: 'Browser compatibility tables for backdrop-filter support.',
    url: 'https://caniuse.com/backdrop-filter',
    category: 'tool',
    icon: 'fa-solid fa-browser',
    tags: ['compatibility', 'browser', 'support'],
  },
  {
    title: 'Glassmorphism CSS Generator',
    description: 'Interactive tool to generate glassmorphism CSS code.',
    url: 'https://hype4.academy/tools/glassmorphism-generator',
    category: 'tool',
    icon: 'fa-solid fa-wand-magic-sparkles',
    tags: ['generator', 'tool', 'css'],
  },
  {
    title: 'UI Glass',
    description: 'Collection of glassmorphism UI components and examples.',
    url: 'https://ui.glass/generator/',
    category: 'tool',
    icon: 'fa-solid fa-palette',
    tags: ['generator', 'components', 'examples'],
  },
  {
    title: 'Dribbble: Glassmorphism',
    description: 'Design inspiration gallery featuring glassmorphism designs.',
    url: 'https://dribbble.com/tags/glassmorphism',
    category: 'inspiration',
    icon: 'fa-brands fa-dribbble',
    tags: ['design', 'inspiration', 'gallery'],
  },
  {
    title: 'Behance: Glass UI',
    description: 'Professional glassmorphism design projects and case studies.',
    url: 'https://www.behance.net/search/projects?search=glassmorphism',
    category: 'inspiration',
    icon: 'fa-brands fa-behance',
    tags: ['design', 'inspiration', 'projects'],
  },
  {
    title: 'Coolors - Color Palette Generator',
    description: 'Generate beautiful color palettes for your glass effects.',
    url: 'https://coolors.co/',
    category: 'tool',
    icon: 'fa-solid fa-palette',
    tags: ['color', 'palette', 'generator'],
  },
  {
    title: 'CSS Gradient Generator',
    description: 'Create smooth gradients for backgrounds behind glass elements.',
    url: 'https://cssgradient.io/',
    category: 'tool',
    icon: 'fa-solid fa-fill-drip',
    tags: ['gradient', 'background', 'generator'],
  },
  {
    title: 'Mesh Gradient Generator',
    description: 'Generate modern mesh gradients perfect for glass effect backgrounds.',
    url: 'https://meshgradient.com/',
    category: 'tool',
    icon: 'fa-solid fa-grid',
    tags: ['gradient', 'mesh', 'background'],
  },
  {
    title: 'Glass UI Library',
    description: 'Another glassmorphism component library with React components.',
    url: 'https://github.com/topics/glassmorphism',
    category: 'library',
    icon: 'fa-brands fa-github',
    tags: ['library', 'components', 'react'],
  },
  {
    title: 'Neumorphism.io',
    description: 'Related design trend - soft UI generator for comparison.',
    url: 'https://neumorphism.io/',
    category: 'tool',
    icon: 'fa-solid fa-shapes',
    tags: ['neumorphism', 'design', 'generator'],
  },
  {
    title: 'WebKit Blog: backdrop-filter',
    description: 'Technical deep dive into backdrop-filter implementation.',
    url: 'https://webkit.org/blog/3632/introducing-backdrop-filters/',
    category: 'article',
    icon: 'fa-solid fa-newspaper',
    tags: ['technical', 'webkit', 'implementation'],
  },
  {
    title: 'Awwwards: Glass Effect Sites',
    description: 'Award-winning websites using glassmorphism effects.',
    url: 'https://www.awwwards.com/websites/glassmorphism/',
    category: 'inspiration',
    icon: 'fa-solid fa-trophy',
    tags: ['inspiration', 'websites', 'awards'],
  },
  {
    title: 'CodePen: Glassmorphism',
    description: 'Interactive glassmorphism examples and experiments.',
    url: 'https://codepen.io/tag/glassmorphism',
    category: 'inspiration',
    icon: 'fa-brands fa-codepen',
    tags: ['codepen', 'examples', 'interactive'],
  },
  {
    title: 'Unsplash',
    description: 'Free high-quality images perfect for glass effect backgrounds.',
    url: 'https://unsplash.com/',
    category: 'tool',
    icon: 'fa-solid fa-image',
    tags: ['images', 'backgrounds', 'free'],
  },
  {
    title: 'Pexels',
    description: 'Free stock photos and videos for background content.',
    url: 'https://www.pexels.com/',
    category: 'tool',
    icon: 'fa-solid fa-photo-film',
    tags: ['images', 'videos', 'backgrounds'],
  },
  {
    title: 'WCAG Contrast Checker',
    description: 'Verify text contrast ratios for accessibility compliance.',
    url: 'https://webaim.org/resources/contrastchecker/',
    category: 'tool',
    icon: 'fa-solid fa-universal-access',
    tags: ['accessibility', 'contrast', 'wcag'],
  },
  {
    title: 'Figma Glass Plugin',
    description: 'Figma plugin for designing glassmorphism effects.',
    url: 'https://www.figma.com/community/search?model_type=public_plugins&q=glass',
    category: 'tool',
    icon: 'fa-brands fa-figma',
    tags: ['figma', 'design', 'plugin'],
  },
  {
    title: 'CSS Tricks: backdrop-filter',
    description: 'Practical guide and examples for backdrop-filter usage.',
    url: 'https://css-tricks.com/almanac/properties/b/backdrop-filter/',
    category: 'article',
    icon: 'fa-solid fa-book-open',
    tags: ['tutorial', 'css', 'guide'],
  },
];

export const relatedLibraries = [
  {
    name: 'Glass UI',
    description: 'React component library with glassmorphism styling',
    url: 'https://github.com/topics/glassmorphism',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework (can be combined with Frostpane)',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Bootstrap',
    description: 'Popular CSS framework (compatible with Frostpane)',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Animate.css',
    description: 'Animation library that works well with glass effects',
    url: 'https://animate.style/',
  },
];

export const communityLinks = [
  {
    name: 'GitHub Repository',
    description: 'Star, fork, and contribute to Frostpane',
    url: 'https://github.com/cameronrye/frostpane',
    icon: 'fa-brands fa-github',
  },
  {
    name: 'Report Issues',
    description: 'Found a bug? Let us know on GitHub',
    url: 'https://github.com/cameronrye/frostpane/issues',
    icon: 'fa-solid fa-bug',
  },
  {
    name: 'Discussions',
    description: 'Join the community discussion',
    url: 'https://github.com/cameronrye/frostpane/discussions',
    icon: 'fa-solid fa-comments',
  },
  {
    name: 'npm Package',
    description: 'View package details and download stats',
    url: 'https://www.npmjs.com/package/frostpane',
    icon: 'fa-brands fa-npm',
  },
];
