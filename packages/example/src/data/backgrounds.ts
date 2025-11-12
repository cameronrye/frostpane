export interface Background {
  id: string;
  name: string;
  type: 'solid' | 'gradient' | 'image';
  value: string;
  description: string;
  category: 'light' | 'dark' | 'colorful';
}

export const backgrounds: Background[] = [
  // Light Solid Backgrounds
  {
    id: 'light-white',
    name: 'Pure White',
    type: 'solid',
    value: '#ffffff',
    description: 'Clean white background',
    category: 'light',
  },
  {
    id: 'light-gray',
    name: 'Light Gray',
    type: 'solid',
    value: '#f5f5f5',
    description: 'Soft gray background',
    category: 'light',
  },
  {
    id: 'light-blue',
    name: 'Light Blue',
    type: 'solid',
    value: '#e3f2fd',
    description: 'Subtle blue tint',
    category: 'light',
  },

  // Dark Solid Backgrounds
  {
    id: 'dark-black',
    name: 'Pure Black',
    type: 'solid',
    value: '#000000',
    description: 'Deep black background',
    category: 'dark',
  },
  {
    id: 'dark-gray',
    name: 'Dark Gray',
    type: 'solid',
    value: '#1a1a1a',
    description: 'Charcoal gray background',
    category: 'dark',
  },
  {
    id: 'dark-blue',
    name: 'Dark Blue',
    type: 'solid',
    value: '#0d1b2a',
    description: 'Deep navy blue',
    category: 'dark',
  },

  // Gradient Backgrounds
  {
    id: 'gradient-sunset',
    name: 'Sunset',
    type: 'gradient',
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Purple to pink gradient',
    category: 'colorful',
  },
  {
    id: 'gradient-ocean',
    name: 'Ocean',
    type: 'gradient',
    value: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
    description: 'Blue to pink gradient',
    category: 'colorful',
  },
  {
    id: 'gradient-forest',
    name: 'Forest',
    type: 'gradient',
    value: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    description: 'Green gradient',
    category: 'colorful',
  },
  {
    id: 'gradient-fire',
    name: 'Fire',
    type: 'gradient',
    value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    description: 'Pink to red gradient',
    category: 'colorful',
  },
  {
    id: 'gradient-aurora',
    name: 'Aurora',
    type: 'gradient',
    value: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    description: 'Cyan to pink gradient',
    category: 'colorful',
  },
  {
    id: 'gradient-midnight',
    name: 'Midnight',
    type: 'gradient',
    value: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    description: 'Dark blue gradient',
    category: 'dark',
  },

  // Image Backgrounds
  {
    id: 'image-abstract',
    name: 'Abstract',
    type: 'image',
    value: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&q=80")',
    description: 'Abstract colorful pattern',
    category: 'colorful',
  },
  {
    id: 'image-nature',
    name: 'Nature',
    type: 'image',
    value: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80")',
    description: 'Mountain landscape',
    category: 'colorful',
  },
  {
    id: 'image-city',
    name: 'City',
    type: 'image',
    value: 'url("https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80")',
    description: 'Urban cityscape',
    category: 'dark',
  },
  {
    id: 'image-space',
    name: 'Space',
    type: 'image',
    value: 'url("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80")',
    description: 'Starry night sky',
    category: 'dark',
  },
];

export const defaultBackground = backgrounds[0];
