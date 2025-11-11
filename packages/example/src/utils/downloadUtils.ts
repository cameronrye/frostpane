/**
 * Utility functions for downloading files
 */

/**
 * Download a file with the given content and filename
 */
export function downloadFile(
  content: string,
  filename: string,
  mimeType: string = 'text/plain'
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Download the Frostpane CSS file
 */
export function downloadFrostpaneCSS(): void {
  // In a real implementation, this would fetch the actual CSS file
  // For now, we'll create a placeholder
  const cssContent = `/* Frostpane CSS Library */
/* Download the full version from: https://www.npmjs.com/package/frostpane */

/* To use Frostpane in your project: */
/* npm install frostpane */
/* or */
/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@latest/dist/frostpane.css"> */

/* Visit https://cameronrye.github.io/frostpane for full documentation */
`;

  downloadFile(cssContent, 'frostpane.css', 'text/css');
}

/**
 * Generate a starter template HTML file
 */
export function downloadStarterTemplate(): void {
  const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frostpane Starter Template</title>

  <!-- Frostpane CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@latest/dist/frostpane.css">

  <!-- Font Awesome (optional, for icons) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

  <style>
    body {
      margin: 0;
      padding: 2rem;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Frostpane</h1>

    <div class="grid">
      <!-- Glass Card Example -->
      <div class="glass-container glass-container--rounded">
        <div class="glass-content">
          <i class="fa-solid fa-star" style="font-size: 2rem; margin-bottom: 1rem;"></i>
          <h2>Glass Card</h2>
          <p>Beautiful frosted glass effect with customizable blur and transparency.</p>
        </div>
      </div>

      <!-- Another Glass Card -->
      <div class="glass-container glass-container--rounded">
        <div class="glass-content">
          <i class="fa-solid fa-heart" style="font-size: 2rem; margin-bottom: 1rem;"></i>
          <h2>Customizable</h2>
          <p>Use CSS variables to customize colors, blur, shadows, and more.</p>
        </div>
      </div>

      <!-- Third Glass Card -->
      <div class="glass-container glass-container--rounded">
        <div class="glass-content">
          <i class="fa-solid fa-rocket" style="font-size: 2rem; margin-bottom: 1rem;"></i>
          <h2>Easy to Use</h2>
          <p>Simple class-based API makes it easy to add glass effects anywhere.</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

  downloadFile(template, 'frostpane-starter.html', 'text/html');
}

/**
 * Generate a custom theme CSS file based on user preferences
 */
export function downloadCustomTheme(theme: Record<string, string>): void {
  let css = `/* Custom Frostpane Theme */\n\n:root {\n`;

  for (const [key, value] of Object.entries(theme)) {
    css += `  ${key}: ${value};\n`;
  }

  css += `}\n`;

  downloadFile(css, 'frostpane-custom-theme.css', 'text/css');
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (_err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}
