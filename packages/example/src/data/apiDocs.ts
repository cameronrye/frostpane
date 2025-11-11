export interface ApiVariable {
  name: string;
  cssVar: string;
  description: string;
  defaultValue: string;
  category:
    | 'colors'
    | 'semantic-colors'
    | 'spacing'
    | 'typography'
    | 'glass-effects'
    | 'transitions'
    | 'interactive'
    | 'breakpoints';
  type: 'color' | 'length' | 'number' | 'timing-function' | 'string';
  relatedVars?: string[];
}

export interface ApiCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const apiCategories: ApiCategory[] = [
  {
    id: 'colors',
    name: 'Base Colors',
    description: 'Primary color variables for glass effects and text',
    icon: 'fa-palette',
  },
  {
    id: 'semantic-colors',
    name: 'Semantic Colors',
    description: 'Contextual colors for UI states and feedback',
    icon: 'fa-circle-check',
  },
  {
    id: 'glass-effects',
    name: 'Glass Effects',
    description: 'Variables controlling the glassmorphism appearance',
    icon: 'fa-droplet',
  },
  {
    id: 'spacing',
    name: 'Spacing',
    description: 'Consistent spacing scale for layouts and components',
    icon: 'fa-ruler-horizontal',
  },
  {
    id: 'typography',
    name: 'Typography',
    description: 'Font sizes, weights, families, and line heights',
    icon: 'fa-font',
  },
  {
    id: 'transitions',
    name: 'Transitions & Animations',
    description: 'Timing functions and durations for smooth animations',
    icon: 'fa-wand-magic-sparkles',
  },
  {
    id: 'interactive',
    name: 'Interactive Elements',
    description: 'Variables for hover, active, and focus states',
    icon: 'fa-hand-pointer',
  },
  {
    id: 'breakpoints',
    name: 'Breakpoints',
    description: 'Responsive design breakpoints',
    icon: 'fa-mobile-screen-button',
  },
];

export const apiVariables: ApiVariable[] = [
  // Base Colors
  {
    name: 'Background Color',
    cssVar: '--fp-bg-color',
    description: 'Primary glass background tint with transparency',
    defaultValue: 'rgba(255, 255, 255, 0.25)',
    category: 'colors',
    type: 'color',
    relatedVars: ['--fp-highlight'],
  },
  {
    name: 'Highlight Color',
    cssVar: '--fp-highlight',
    description: 'Glass highlight and specular reflection color',
    defaultValue: 'rgba(255, 255, 255, 0.75)',
    category: 'colors',
    type: 'color',
    relatedVars: ['--fp-bg-color'],
  },
  {
    name: 'Text Color',
    cssVar: '--fp-text',
    description: 'Default text color',
    defaultValue: '#ffffff',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Primary Text',
    cssVar: '--fp-text-primary',
    description: 'Primary text color for high emphasis content',
    defaultValue: '#ffffff',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Secondary Text',
    cssVar: '--fp-text-secondary',
    description: 'Secondary text color for medium emphasis content',
    defaultValue: 'rgba(255, 255, 255, 0.85)',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Text on Glass',
    cssVar: '--fp-text-on-glass',
    description: 'Text color optimized for glass backgrounds',
    defaultValue: 'rgba(0, 0, 0, 0.85)',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Muted Text',
    cssVar: '--fp-text-muted',
    description: 'Muted text color for low emphasis content',
    defaultValue: 'rgba(0, 0, 0, 0.6)',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Accent Red',
    cssVar: '--fp-red',
    description: 'Primary accent color (red)',
    defaultValue: '#fb4268',
    category: 'colors',
    type: 'color',
  },
  {
    name: 'Grey',
    cssVar: '--fp-grey',
    description: 'Secondary grey color',
    defaultValue: '#444739',
    category: 'colors',
    type: 'color',
  },

  // Semantic Colors - Primary
  {
    name: 'Primary Color',
    cssVar: '--fp-color-primary',
    description: 'Primary brand color',
    defaultValue: '#667eea',
    category: 'semantic-colors',
    type: 'color',
    relatedVars: ['--fp-color-primary-light', '--fp-color-primary-dark'],
  },
  {
    name: 'Primary Light',
    cssVar: '--fp-color-primary-light',
    description: 'Lighter shade of primary color',
    defaultValue: '#818cf8',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Primary Dark',
    cssVar: '--fp-color-primary-dark',
    description: 'Darker shade of primary color',
    defaultValue: '#4f46e5',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Secondary Color',
    cssVar: '--fp-color-secondary',
    description: 'Secondary brand color',
    defaultValue: '#fb4268',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Success Color',
    cssVar: '--fp-color-success',
    description: 'Color for success states and positive feedback',
    defaultValue: '#4caf50',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Warning Color',
    cssVar: '--fp-color-warning',
    description: 'Color for warning states and caution messages',
    defaultValue: '#ff9800',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Error Color',
    cssVar: '--fp-color-error',
    description: 'Color for error states and critical messages',
    defaultValue: '#f44336',
    category: 'semantic-colors',
    type: 'color',
  },
  {
    name: 'Info Color',
    cssVar: '--fp-color-info',
    description: 'Color for informational messages',
    defaultValue: '#2196f3',
    category: 'semantic-colors',
    type: 'color',
  },

  // Glass Effects
  {
    name: 'Backdrop Blur',
    cssVar: '--fp-backdrop-blur',
    description: 'Blur intensity for the backdrop-filter effect',
    defaultValue: '4px',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Border Radius',
    cssVar: '--fp-border-radius',
    description: 'Default border radius for glass containers',
    defaultValue: '2rem',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Border Radius Rounded',
    cssVar: '--fp-border-radius-rounded',
    description: 'Larger border radius for rounded variants',
    defaultValue: '3rem',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Border Radius Small',
    cssVar: '--fp-border-radius-small',
    description: 'Smaller border radius for compact elements',
    defaultValue: '0.5rem',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Shadow Color Primary',
    cssVar: '--fp-shadow-color-primary',
    description: 'Primary shadow color',
    defaultValue: 'rgba(0, 0, 0, 0.2)',
    category: 'glass-effects',
    type: 'color',
  },
  {
    name: 'Shadow Blur Primary',
    cssVar: '--fp-shadow-blur-primary',
    description: 'Blur radius for primary shadow',
    defaultValue: '6px',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Shadow Blur Secondary',
    cssVar: '--fp-shadow-blur-secondary',
    description: 'Blur radius for secondary shadow',
    defaultValue: '20px',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Shadow Offset Y',
    cssVar: '--fp-shadow-offset-y',
    description: 'Vertical offset for shadows',
    defaultValue: '6px',
    category: 'glass-effects',
    type: 'length',
  },
  {
    name: 'Filter Saturate',
    cssVar: '--fp-filter-saturate',
    description: 'Saturation level for filter effects',
    defaultValue: '120%',
    category: 'glass-effects',
    type: 'number',
  },
  {
    name: 'Filter Brightness',
    cssVar: '--fp-filter-brightness',
    description: 'Brightness level for filter effects',
    defaultValue: '1.15',
    category: 'glass-effects',
    type: 'number',
  },

  // Spacing
  {
    name: 'Space XS',
    cssVar: '--fp-space-xs',
    description: 'Extra small spacing (4px)',
    defaultValue: '0.25rem',
    category: 'spacing',
    type: 'length',
  },
  {
    name: 'Space SM',
    cssVar: '--fp-space-sm',
    description: 'Small spacing (8px)',
    defaultValue: '0.5rem',
    category: 'spacing',
    type: 'length',
  },
  {
    name: 'Space MD',
    cssVar: '--fp-space-md',
    description: 'Medium spacing (16px)',
    defaultValue: '1rem',
    category: 'spacing',
    type: 'length',
  },
  {
    name: 'Space LG',
    cssVar: '--fp-space-lg',
    description: 'Large spacing (24px)',
    defaultValue: '1.5rem',
    category: 'spacing',
    type: 'length',
  },
  {
    name: 'Space XL',
    cssVar: '--fp-space-xl',
    description: 'Extra large spacing (32px)',
    defaultValue: '2rem',
    category: 'spacing',
    type: 'length',
  },
  {
    name: 'Space 2XL',
    cssVar: '--fp-space-2xl',
    description: 'Double extra large spacing (48px)',
    defaultValue: '3rem',
    category: 'spacing',
    type: 'length',
  },

  // Typography
  {
    name: 'Text XS',
    cssVar: '--fp-text-xs',
    description: 'Extra small text size (12px)',
    defaultValue: '0.75rem',
    category: 'typography',
    type: 'length',
  },
  {
    name: 'Text SM',
    cssVar: '--fp-text-sm',
    description: 'Small text size (14px)',
    defaultValue: '0.875rem',
    category: 'typography',
    type: 'length',
  },
  {
    name: 'Text Base',
    cssVar: '--fp-text-base',
    description: 'Base text size (16px)',
    defaultValue: '1rem',
    category: 'typography',
    type: 'length',
  },
  {
    name: 'Text LG',
    cssVar: '--fp-text-lg',
    description: 'Large text size (18px)',
    defaultValue: '1.125rem',
    category: 'typography',
    type: 'length',
  },
  {
    name: 'Text XL',
    cssVar: '--fp-text-xl',
    description: 'Extra large text size (20px)',
    defaultValue: '1.25rem',
    category: 'typography',
    type: 'length',
  },
  {
    name: 'Font Sans',
    cssVar: '--fp-font-sans',
    description: 'Sans-serif font family stack',
    defaultValue: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    category: 'typography',
    type: 'string',
  },

  // Transitions
  {
    name: 'Transition Duration',
    cssVar: '--fp-transition-duration',
    description: 'Default transition duration',
    defaultValue: '0.4s',
    category: 'transitions',
    type: 'length',
  },
  {
    name: 'Ease Smooth',
    cssVar: '--fp-ease-smooth',
    description: 'Smooth easing function (Material Design)',
    defaultValue: 'cubic-bezier(0.4, 0, 0.2, 1)',
    category: 'transitions',
    type: 'timing-function',
  },
  {
    name: 'Ease Bounce',
    cssVar: '--fp-ease-bounce',
    description: 'Subtle bounce easing function',
    defaultValue: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    category: 'transitions',
    type: 'timing-function',
  },

  // Interactive
  {
    name: 'Hover Scale',
    cssVar: '--fp-hover-scale',
    description: 'Scale factor for hover state',
    defaultValue: '1.1',
    category: 'interactive',
    type: 'number',
  },
  {
    name: 'Active Scale',
    cssVar: '--fp-active-scale',
    description: 'Scale factor for active/pressed state',
    defaultValue: '0.95',
    category: 'interactive',
    type: 'number',
  },

  // Breakpoints
  {
    name: 'Breakpoint SM',
    cssVar: '--fp-breakpoint-sm',
    description: 'Small screen breakpoint',
    defaultValue: '640px',
    category: 'breakpoints',
    type: 'length',
  },
  {
    name: 'Breakpoint MD',
    cssVar: '--fp-breakpoint-md',
    description: 'Medium screen breakpoint',
    defaultValue: '768px',
    category: 'breakpoints',
    type: 'length',
  },
  {
    name: 'Breakpoint LG',
    cssVar: '--fp-breakpoint-lg',
    description: 'Large screen breakpoint',
    defaultValue: '1024px',
    category: 'breakpoints',
    type: 'length',
  },
  {
    name: 'Breakpoint XL',
    cssVar: '--fp-breakpoint-xl',
    description: 'Extra large screen breakpoint',
    defaultValue: '1280px',
    category: 'breakpoints',
    type: 'length',
  },
];
