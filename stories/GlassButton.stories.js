import '@frostpane/core/css';

export default {
  title: 'Components/Glass Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'small'],
      description: 'Button variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

const createButton = ({ label, variant, disabled }) => {
  const classes = ['glass-button'];
  if (variant && variant !== 'default') {
    classes.push(`glass-button--${variant}`);
  }

  return `
    <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px; display: flex; align-items: center; justify-content: center;">
      <button class="${classes.join(' ')}" ${disabled ? 'disabled' : ''}>
        ${label || 'Click Me'}
      </button>
    </div>
  `;
};

export const Default = {
  args: {
    label: 'Default Button',
    variant: 'default',
    disabled: false,
  },
  render: createButton,
};

export const Rounded = {
  args: {
    label: 'Rounded Button',
    variant: 'rounded',
    disabled: false,
  },
  render: createButton,
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'small',
    disabled: false,
  },
  render: createButton,
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'default',
    disabled: true,
  },
  render: createButton,
};

export const ButtonGroup = {
  render: () => `
    <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px; display: flex; align-items: center; justify-content: center; gap: 1rem;">
      <button class="glass-button">Primary</button>
      <button class="glass-button glass-button--rounded">Rounded</button>
      <button class="glass-button glass-button--small">Small</button>
    </div>
  `,
};
