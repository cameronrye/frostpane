export interface PlaygroundVariable {
  name: string;
  cssVar: string;
  type: 'color' | 'range' | 'select';
  defaultValue: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: { label: string; value: string }[];
  category: 'colors' | 'glass' | 'spacing' | 'transitions';
}

export interface PlaygroundPreset {
  name: string;
  description: string;
  variables: Record<string, string>;
}

export const playgroundVariables: PlaygroundVariable[] = [
  // Colors
  {
    name: 'Background Color',
    cssVar: '--fp-bg-color',
    type: 'color',
    defaultValue: 'rgba(255, 255, 255, 0.25)',
    category: 'colors',
  },
  {
    name: 'Highlight Color',
    cssVar: '--fp-highlight',
    type: 'color',
    defaultValue: 'rgba(255, 255, 255, 0.75)',
    category: 'colors',
  },
  {
    name: 'Primary Color',
    cssVar: '--fp-red',
    type: 'color',
    defaultValue: '#fb4268',
    category: 'colors',
  },
  {
    name: 'Text Color',
    cssVar: '--fp-text',
    type: 'color',
    defaultValue: '#ffffff',
    category: 'colors',
  },

  // Glass Effects
  {
    name: 'Backdrop Blur',
    cssVar: '--fp-backdrop-blur',
    type: 'range',
    defaultValue: '4',
    min: 0,
    max: 50,
    step: 1,
    unit: 'px',
    category: 'glass',
  },
  {
    name: 'Border Radius',
    cssVar: '--fp-border-radius',
    type: 'range',
    defaultValue: '2',
    min: 0,
    max: 5,
    step: 0.25,
    unit: 'rem',
    category: 'glass',
  },
  {
    name: 'Shadow Blur',
    cssVar: '--fp-shadow-blur-primary',
    type: 'range',
    defaultValue: '6',
    min: 0,
    max: 50,
    step: 1,
    unit: 'px',
    category: 'glass',
  },
  {
    name: 'Shadow Offset Y',
    cssVar: '--fp-shadow-offset-y',
    type: 'range',
    defaultValue: '6',
    min: 0,
    max: 30,
    step: 1,
    unit: 'px',
    category: 'glass',
  },
  {
    name: 'Filter Saturate',
    cssVar: '--fp-filter-saturate',
    type: 'range',
    defaultValue: '120',
    min: 50,
    max: 200,
    step: 5,
    unit: '%',
    category: 'glass',
  },
  {
    name: 'Filter Brightness',
    cssVar: '--fp-filter-brightness',
    type: 'range',
    defaultValue: '1.15',
    min: 0.5,
    max: 2,
    step: 0.05,
    unit: '',
    category: 'glass',
  },

  // Transitions
  {
    name: 'Transition Duration',
    cssVar: '--fp-transition-duration',
    type: 'range',
    defaultValue: '0.4',
    min: 0.1,
    max: 2,
    step: 0.1,
    unit: 's',
    category: 'transitions',
  },
  {
    name: 'Hover Scale',
    cssVar: '--fp-hover-scale',
    type: 'range',
    defaultValue: '1.1',
    min: 1,
    max: 1.5,
    step: 0.05,
    unit: '',
    category: 'transitions',
  },
];

export const playgroundPresets: PlaygroundPreset[] = [
  {
    name: 'Default',
    description: 'The default Frostpane theme',
    variables: {
      '--fp-bg-color': 'rgba(255, 255, 255, 0.25)',
      '--fp-highlight': 'rgba(255, 255, 255, 0.75)',
      '--fp-red': '#fb4268',
      '--fp-text': '#ffffff',
      '--fp-backdrop-blur': '4px',
      '--fp-border-radius': '2rem',
      '--fp-shadow-blur-primary': '6px',
      '--fp-shadow-offset-y': '6px',
      '--fp-filter-saturate': '120%',
      '--fp-filter-brightness': '1.15',
      '--fp-transition-duration': '0.4s',
      '--fp-hover-scale': '1.1',
    },
  },
  {
    name: 'Minimal',
    description: 'Clean and subtle glass effect',
    variables: {
      '--fp-bg-color': 'rgba(255, 255, 255, 0.15)',
      '--fp-highlight': 'rgba(255, 255, 255, 0.5)',
      '--fp-red': '#667eea',
      '--fp-text': '#ffffff',
      '--fp-backdrop-blur': '2px',
      '--fp-border-radius': '1rem',
      '--fp-shadow-blur-primary': '3px',
      '--fp-shadow-offset-y': '3px',
      '--fp-filter-saturate': '100%',
      '--fp-filter-brightness': '1',
      '--fp-transition-duration': '0.3s',
      '--fp-hover-scale': '1.05',
    },
  },
  {
    name: 'Bold',
    description: 'Strong glass effect with high contrast',
    variables: {
      '--fp-bg-color': 'rgba(255, 255, 255, 0.35)',
      '--fp-highlight': 'rgba(255, 255, 255, 0.9)',
      '--fp-red': '#e91e63',
      '--fp-text': '#ffffff',
      '--fp-backdrop-blur': '10px',
      '--fp-border-radius': '3rem',
      '--fp-shadow-blur-primary': '12px',
      '--fp-shadow-offset-y': '10px',
      '--fp-filter-saturate': '150%',
      '--fp-filter-brightness': '1.3',
      '--fp-transition-duration': '0.5s',
      '--fp-hover-scale': '1.15',
    },
  },
  {
    name: 'Dark',
    description: 'Dark theme with subtle glass',
    variables: {
      '--fp-bg-color': 'rgba(0, 0, 0, 0.4)',
      '--fp-highlight': 'rgba(255, 255, 255, 0.3)',
      '--fp-red': '#ff6b9d',
      '--fp-text': '#ffffff',
      '--fp-backdrop-blur': '8px',
      '--fp-border-radius': '1.5rem',
      '--fp-shadow-blur-primary': '8px',
      '--fp-shadow-offset-y': '8px',
      '--fp-filter-saturate': '110%',
      '--fp-filter-brightness': '0.9',
      '--fp-transition-duration': '0.4s',
      '--fp-hover-scale': '1.08',
    },
  },
];
