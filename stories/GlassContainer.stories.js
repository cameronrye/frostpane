import '@frostpane/core/css';

export default {
  title: 'Components/Glass Container',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'small', 'bordered'],
      description: 'Container variant',
    },
    content: {
      control: 'text',
      description: 'Content to display inside the container',
    },
    customBlur: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Custom backdrop blur amount (px)',
    },
    customBgColor: {
      control: 'color',
      description: 'Custom background color',
    },
  },
};

const createContainer = ({ variant, content, customBlur, customBgColor }) => {
  const classes = ['glass-container'];
  if (variant && variant !== 'default') {
    classes.push(`glass-container--${variant}`);
  }

  const styles = [];
  if (customBlur !== undefined) {
    styles.push(`--fp-backdrop-blur: ${customBlur}px`);
  }
  if (customBgColor) {
    // Convert hex to rgba
    const r = parseInt(customBgColor.slice(1, 3), 16);
    const g = parseInt(customBgColor.slice(3, 5), 16);
    const b = parseInt(customBgColor.slice(5, 7), 16);
    styles.push(`--fp-bg-color: rgba(${r}, ${g}, ${b}, 0.25)`);
  }

  return `
    <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 300px; display: flex; align-items: center; justify-content: center;">
      <div class="${classes.join(' ')}" style="${styles.join('; ')}">
        <div class="glass-content">
          ${content || 'This is a glass container with frosted glass effect'}
        </div>
      </div>
    </div>
  `;
};

export const Default = {
  args: {
    variant: 'default',
    content: 'Default glass container',
  },
  render: createContainer,
};

export const Rounded = {
  args: {
    variant: 'rounded',
    content: 'Rounded glass container',
  },
  render: createContainer,
};

export const Small = {
  args: {
    variant: 'small',
    content: 'Small glass container',
  },
  render: createContainer,
};

export const Bordered = {
  args: {
    variant: 'bordered',
    content: 'Bordered glass container',
  },
  render: createContainer,
};

export const CustomBlur = {
  args: {
    variant: 'default',
    content: 'Container with custom blur',
    customBlur: 12,
  },
  render: createContainer,
};

export const CustomColor = {
  args: {
    variant: 'default',
    content: 'Container with custom background color',
    customBgColor: '#000000',
  },
  render: createContainer,
};

export const Interactive = {
  args: {
    variant: 'default',
    content: 'Try adjusting the controls!',
    customBlur: 4,
  },
  render: createContainer,
};
