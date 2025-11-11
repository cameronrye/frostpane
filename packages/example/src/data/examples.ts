export interface Example {
  title: string;
  description: string;
  icon: string;
  label: string;
  cssCode: string;
  customStyles?: string;
  category: string;
  tags: string[];
}

export const examples: Example[] = [
  {
    title: 'Dark Glass',
    description: 'A darker glass effect perfect for dark mode interfaces.',
    icon: 'fa-solid fa-moon',
    label: 'Dark Mode',
    cssCode: `.dark-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.4);
  --fp-highlight: rgba(255, 255, 255, 0.3);
  --fp-backdrop-blur: 8px;
}`,
    customStyles:
      '--fp-bg-color: rgba(0, 0, 0, 0.4); --fp-highlight: rgba(255, 255, 255, 0.3); --fp-backdrop-blur: 8px;',
    category: 'Style',
    tags: ['dark', 'theme', 'mode'],
  },
  {
    title: 'Strong Blur',
    description: 'Enhanced blur for a more pronounced frosted effect.',
    icon: 'fa-solid fa-eye-dropper',
    label: 'Enhanced Blur',
    cssCode: `.strong-blur {
  --fp-backdrop-blur: 12px;
  --fp-filter-saturate: 150%;
}`,
    customStyles: '--fp-backdrop-blur: 12px; --fp-filter-saturate: 150%;',
    category: 'Effect',
    tags: ['blur', 'frosted', 'intense'],
  },
  {
    title: 'Elevated Shadow',
    description: 'Deeper shadows create a floating effect.',
    icon: 'fa-solid fa-layer-group',
    label: 'Floating Effect',
    cssCode: `.elevated-glass {
  --fp-shadow-offset-y: 12px;
  --fp-shadow-blur-primary: 12px;
  --fp-shadow-blur-secondary: 30px;
}`,
    customStyles:
      '--fp-shadow-offset-y: 12px; --fp-shadow-blur-primary: 12px; --fp-shadow-blur-secondary: 30px;',
    category: 'Effect',
    tags: ['shadow', 'elevation', 'depth'],
  },
  {
    title: 'Minimal Glass',
    description: 'Subtle effect with reduced blur and transparency.',
    icon: 'fa-solid fa-feather',
    label: 'Subtle Effect',
    cssCode: `.minimal-glass {
  --fp-backdrop-blur: 2px;
  --fp-bg-color: rgba(255, 255, 255, 0.15);
  --fp-shadow-blur-primary: 4px;
}`,
    customStyles:
      '--fp-backdrop-blur: 2px; --fp-bg-color: rgba(255, 255, 255, 0.15); --fp-shadow-blur-primary: 4px;',
    category: 'Style',
    tags: ['minimal', 'subtle', 'light'],
  },
  {
    title: 'Colored Glass',
    description: 'Add color tints to create unique glass effects.',
    icon: 'fa-solid fa-palette',
    label: 'Blue Tint',
    cssCode: `.colored-glass {
  --fp-bg-color: rgba(102, 126, 234, 0.3);
  --fp-highlight: rgba(255, 255, 255, 0.5);
  --fp-filter-saturate: 140%;
}`,
    customStyles:
      '--fp-bg-color: rgba(102, 126, 234, 0.3); --fp-highlight: rgba(255, 255, 255, 0.5); --fp-filter-saturate: 140%;',
    category: 'Color',
    tags: ['colored', 'tint', 'blue'],
  },
  {
    title: 'Frosted Glass',
    description: 'Heavy frost effect with maximum blur.',
    icon: 'fa-solid fa-snowflake',
    label: 'Heavy Frost',
    cssCode: `.frosted-glass {
  --fp-backdrop-blur: 16px;
  --fp-bg-color: rgba(255, 255, 255, 0.35);
  --fp-filter-brightness: 1.2;
}`,
    customStyles:
      '--fp-backdrop-blur: 16px; --fp-bg-color: rgba(255, 255, 255, 0.35); --fp-filter-brightness: 1.2;',
    category: 'Effect',
    tags: ['frosted', 'blur', 'intense'],
  },
  {
    title: 'Sharp Corners',
    description: 'Angular design with minimal border radius.',
    icon: 'fa-solid fa-square',
    label: 'Angular Design',
    cssCode: `.sharp-glass {
  --fp-border-radius: 0.5rem;
  --fp-backdrop-blur: 6px;
  --fp-shadow-blur-primary: 8px;
}`,
    customStyles:
      '--fp-border-radius: 0.5rem; --fp-backdrop-blur: 6px; --fp-shadow-blur-primary: 8px;',
    category: 'Shape',
    tags: ['angular', 'sharp', 'corners'],
  },
  {
    title: 'Pill Shape',
    description: 'Fully rounded pill-shaped glass elements.',
    icon: 'fa-solid fa-capsules',
    label: 'Rounded Pill',
    cssCode: `.pill-glass {
  --fp-border-radius: 50px;
  --fp-backdrop-blur: 6px;
}`,
    customStyles: '--fp-border-radius: 50px; --fp-backdrop-blur: 6px;',
    category: 'Shape',
    tags: ['rounded', 'pill', 'circular'],
  },
  {
    title: 'Snappy Animations',
    description: 'Fast, responsive animations for interactive elements.',
    icon: 'fa-solid fa-bolt',
    label: 'Fast Response',
    cssCode: `.snappy-glass {
  --fp-transition-duration: 0.15s;
  --fp-transition-timing: ease-out;
  --fp-hover-scale: 1.05;
}`,
    customStyles: '',
    category: 'Animation',
    tags: ['animation', 'fast', 'responsive'],
  },
  {
    title: 'Gradient Glass',
    description: 'Glass effect with gradient background for depth.',
    icon: 'fa-solid fa-fill-drip',
    label: 'Gradient Style',
    cssCode: `.gradient-glass {
  --fp-bg-color: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  --fp-backdrop-blur: 10px;
  --fp-border-color: rgba(255, 255, 255, 0.3);
}`,
    customStyles:
      'background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3)); --fp-backdrop-blur: 10px; --fp-border-color: rgba(255, 255, 255, 0.3);',
    category: 'Effect',
    tags: ['gradient', 'colorful', 'depth'],
  },
  {
    title: 'Layered Glass',
    description: 'Multiple glass layers for enhanced depth perception.',
    icon: 'fa-solid fa-layer-group',
    label: 'Layered Effect',
    cssCode: `.layered-glass {
  --fp-backdrop-blur: 8px;
  --fp-bg-color: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}`,
    customStyles:
      '--fp-backdrop-blur: 8px; --fp-bg-color: rgba(255, 255, 255, 0.15); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5);',
    category: 'Effect',
    tags: ['layered', 'depth', 'shadow'],
  },
  {
    title: 'Animated Glass',
    description: 'Glass with smooth hover animations and transitions.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    label: 'Hover Me',
    cssCode: `.animated-glass {
  --fp-transition-duration: 0.4s;
  --fp-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-glass:hover {
  --fp-backdrop-blur: 16px;
  --fp-bg-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-8px) scale(1.02);
}`,
    customStyles: '--fp-transition-duration: 0.4s;',
    category: 'Animation',
    tags: ['animated', 'hover', 'interactive'],
  },
  {
    title: 'Neon Glass',
    description: 'Vibrant neon-style glass with glowing borders.',
    icon: 'fa-solid fa-lightbulb',
    label: 'Neon Glow',
    cssCode: `.neon-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.5);
  --fp-backdrop-blur: 8px;
  --fp-border-color: rgba(0, 255, 255, 0.8);
  border: 2px solid var(--fp-border-color);
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.5),
    inset 0 0 20px rgba(0, 255, 255, 0.2);
}`,
    customStyles:
      '--fp-bg-color: rgba(0, 0, 0, 0.5); --fp-backdrop-blur: 8px; border: 2px solid rgba(0, 255, 255, 0.8); box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2);',
    category: 'Effect',
    tags: ['neon', 'glow', 'vibrant'],
  },
  {
    title: 'High Contrast Glass',
    description: 'Enhanced contrast for better accessibility and readability.',
    icon: 'fa-solid fa-adjust',
    label: 'High Contrast',
    cssCode: `.high-contrast-glass {
  --fp-bg-color: rgba(0, 0, 0, 0.8);
  --fp-backdrop-blur: 4px;
  --fp-border-color: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--fp-border-color);
  color: white;
}`,
    customStyles:
      '--fp-bg-color: rgba(0, 0, 0, 0.8); --fp-backdrop-blur: 4px; border: 2px solid rgba(255, 255, 255, 0.9); color: white;',
    category: 'Style',
    tags: ['contrast', 'accessibility', 'readable'],
  },
  {
    title: 'Textured Glass',
    description: 'Glass with subtle texture pattern for added visual interest.',
    icon: 'fa-solid fa-grip',
    label: 'Textured',
    cssCode: `.textured-glass {
  --fp-backdrop-blur: 10px;
  --fp-bg-color: rgba(255, 255, 255, 0.25);
  background-image:
    linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
  background-size: 20px 20px;
}`,
    customStyles:
      '--fp-backdrop-blur: 10px; --fp-bg-color: rgba(255, 255, 255, 0.25); background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%); background-size: 20px 20px;',
    category: 'Effect',
    tags: ['textured', 'pattern', 'detailed'],
  },
  {
    title: 'Spring Theme',
    description: 'Fresh spring-themed glass with pastel colors.',
    icon: 'fa-solid fa-seedling',
    label: 'Spring',
    cssCode: `.spring-glass {
  --fp-bg-color: rgba(144, 238, 144, 0.3);
  --fp-backdrop-blur: 8px;
  --fp-highlight: rgba(255, 255, 255, 0.5);
  --fp-filter-saturate: 130%;
}`,
    customStyles:
      '--fp-bg-color: rgba(144, 238, 144, 0.3); --fp-backdrop-blur: 8px; --fp-highlight: rgba(255, 255, 255, 0.5); --fp-filter-saturate: 130%;',
    category: 'Theme',
    tags: ['spring', 'seasonal', 'green'],
  },
  {
    title: 'Autumn Theme',
    description: 'Warm autumn-themed glass with orange and brown tones.',
    icon: 'fa-solid fa-leaf',
    label: 'Autumn',
    cssCode: `.autumn-glass {
  --fp-bg-color: rgba(255, 140, 0, 0.3);
  --fp-backdrop-blur: 8px;
  --fp-highlight: rgba(255, 200, 100, 0.4);
  --fp-filter-saturate: 120%;
}`,
    customStyles:
      '--fp-bg-color: rgba(255, 140, 0, 0.3); --fp-backdrop-blur: 8px; --fp-highlight: rgba(255, 200, 100, 0.4); --fp-filter-saturate: 120%;',
    category: 'Theme',
    tags: ['autumn', 'seasonal', 'orange'],
  },
  {
    title: 'Winter Theme',
    description: 'Cool winter-themed glass with icy blue tones.',
    icon: 'fa-solid fa-snowflake',
    label: 'Winter',
    cssCode: `.winter-glass {
  --fp-bg-color: rgba(173, 216, 230, 0.3);
  --fp-backdrop-blur: 12px;
  --fp-highlight: rgba(255, 255, 255, 0.6);
  --fp-filter-brightness: 1.1;
}`,
    customStyles:
      '--fp-bg-color: rgba(173, 216, 230, 0.3); --fp-backdrop-blur: 12px; --fp-highlight: rgba(255, 255, 255, 0.6); --fp-filter-brightness: 1.1;',
    category: 'Theme',
    tags: ['winter', 'seasonal', 'blue'],
  },
  {
    title: 'Brand Theme - Tech',
    description: 'Modern tech brand theme with blue and purple.',
    icon: 'fa-solid fa-microchip',
    label: 'Tech Brand',
    cssCode: `.tech-brand-glass {
  --fp-bg-color: rgba(59, 130, 246, 0.3);
  --fp-backdrop-blur: 10px;
  --fp-highlight: rgba(147, 197, 253, 0.4);
  --fp-border-color: rgba(59, 130, 246, 0.5);
}`,
    customStyles:
      '--fp-bg-color: rgba(59, 130, 246, 0.3); --fp-backdrop-blur: 10px; --fp-highlight: rgba(147, 197, 253, 0.4); --fp-border-color: rgba(59, 130, 246, 0.5);',
    category: 'Theme',
    tags: ['brand', 'tech', 'blue'],
  },
];
