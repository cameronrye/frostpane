/**
 * Utility functions for creating CodeSandbox and CodePen links
 */

export interface SandboxConfig {
  title: string;
  description: string;
  cssCode: string;
  customStyles?: string;
  icon?: string;
  label?: string;
}

/**
 * Generate HTML content for the sandbox
 */
function generateHTML(config: SandboxConfig): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.title} - Frostpane Example</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@latest/dist/frostpane.css">
  <style>
    body {
      margin: 0;
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .container {
      max-width: 600px;
      width: 100%;
    }

    h1 {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    ${config.cssCode}
  </style>
</head>
<body>
  <div class="container">
    <h1>${config.title}</h1>
    <div class="glass-container glass-container--rounded" ${config.customStyles ? `style="${config.customStyles}"` : ''}>
      <div class="glass-content">
        ${config.icon ? `<i class="${config.icon}" style="font-size: 2rem; margin-bottom: 1rem;"></i>` : ''}
        <h2>${config.label || 'Glass Effect Example'}</h2>
        <p>${config.description}</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Create a CodeSandbox URL
 */
export function createCodeSandboxURL(config: SandboxConfig): string {
  const html = generateHTML(config);

  const parameters = {
    files: {
      'index.html': {
        content: html,
      },
      'package.json': {
        content: {
          name: config.title.toLowerCase().replace(/\s+/g, '-'),
          version: '1.0.0',
          description: config.description,
          main: 'index.html',
          scripts: {},
          dependencies: {
            frostpane: 'latest',
          },
        },
      },
    },
  };

  const json = JSON.stringify(parameters);
  const compressed = btoa(json);

  return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${compressed}`;
}

/**
 * Create a CodePen URL (opens in new window with form submission)
 */
export function createCodePenForm(config: SandboxConfig): string {
  const html = generateHTML(config);

  const data = {
    title: `${config.title} - Frostpane Example`,
    description: config.description,
    html: html,
    html_pre_processor: 'none',
    css: '',
    css_pre_processor: 'none',
    js: '',
    js_pre_processor: 'none',
  };

  return JSON.stringify(data);
}

/**
 * Open example in CodePen
 */
export function openInCodePen(config: SandboxConfig): void {
  const data = createCodePenForm(config);

  const form = document.createElement('form');
  form.action = 'https://codepen.io/pen/define';
  form.method = 'POST';
  form.target = '_blank';

  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'data';
  input.value = data;

  form.appendChild(input);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

/**
 * Open example in CodeSandbox
 */
export function openInCodeSandbox(config: SandboxConfig): void {
  const url = createCodeSandboxURL(config);
  window.open(url, '_blank');
}
