import '@frostpane/core/css';

export default {
  title: 'Components/Glass Input',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

const createInput = ({ placeholder, type, disabled }) => {
  return `
    <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 200px; display: flex; align-items: center; justify-content: center;">
      <input 
        class="glass-input" 
        type="${type || 'text'}" 
        placeholder="${placeholder || 'Enter text...'}"
        ${disabled ? 'disabled' : ''}
      />
    </div>
  `;
};

export const Default = {
  args: {
    placeholder: 'Enter your name',
    type: 'text',
    disabled: false,
  },
  render: createInput,
};

export const Email = {
  args: {
    placeholder: 'Enter your email',
    type: 'email',
    disabled: false,
  },
  render: createInput,
};

export const Password = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
    disabled: false,
  },
  render: createInput,
};

export const Disabled = {
  args: {
    placeholder: 'Disabled input',
    type: 'text',
    disabled: true,
  },
  render: createInput,
};

export const Form = {
  render: () => `
    <div style="padding: 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 300px; display: flex; align-items: center; justify-content: center;">
      <div class="glass-container" style="max-width: 400px; width: 100%;">
        <div class="glass-content">
          <h2 style="margin-top: 0; color: rgba(0, 0, 0, 0.85);">Sign In</h2>
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <input class="glass-input" type="email" placeholder="Email" />
            <input class="glass-input" type="password" placeholder="Password" />
            <button class="glass-button" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  `,
};
