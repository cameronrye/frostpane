export interface AccessibilityFeature {
  icon: string;
  title: string;
  description: string;
  tips: string[];
}

export const accessibilityFeatures: AccessibilityFeature[] = [
  {
    icon: 'fa-eye',
    title: 'Color Contrast',
    description: 'Ensure sufficient contrast between text and glass backgrounds for readability.',
    tips: [
      'Use darker or lighter text colors to meet WCAG AA standards (4.5:1 for normal text)',
      'Test contrast ratios with tools like WebAIM Contrast Checker',
      'Consider adding a semi-opaque background behind text for better readability',
      'Avoid relying solely on color to convey information',
    ],
  },
  {
    icon: 'fa-text-height',
    title: 'Text Readability',
    description: 'Maintain legible text sizes and line heights for comfortable reading.',
    tips: [
      'Use minimum font size of 16px for body text',
      'Set line-height to at least 1.5 for better readability',
      'Ensure adequate spacing between interactive elements (minimum 44x44px touch targets)',
      'Use clear, readable fonts and avoid overly decorative typefaces',
    ],
  },
  {
    icon: 'fa-hand-pointer',
    title: 'Focus Indicators',
    description: 'Provide clear visual feedback for keyboard navigation and focus states.',
    tips: [
      'Always include visible focus indicators on interactive elements',
      'Use high-contrast colors for focus outlines',
      'Ensure focus order follows logical reading order',
      'Test keyboard navigation with Tab, Shift+Tab, Enter, and Space keys',
    ],
  },
  {
    icon: 'fa-universal-access',
    title: 'Screen Readers',
    description: 'Ensure compatibility with assistive technologies like screen readers.',
    tips: [
      'Use semantic HTML elements (button, nav, main, etc.)',
      'Add descriptive alt text for images and icons',
      'Use aria-label for icon-only buttons',
      'Provide aria-live regions for dynamic content updates',
    ],
  },
  {
    icon: 'fa-keyboard',
    title: 'Keyboard Navigation',
    description: 'Enable full functionality through keyboard-only interaction.',
    tips: [
      'Ensure all interactive elements are keyboard accessible',
      'Support standard keyboard shortcuts (Escape to close modals, etc.)',
      'Avoid keyboard traps where users cannot navigate away',
      'Provide skip links to bypass repetitive navigation',
    ],
  },
  {
    icon: 'fa-code',
    title: 'ARIA Attributes',
    description: 'Use ARIA attributes to enhance accessibility for complex components.',
    tips: [
      'Use role attributes for custom components (role="dialog", role="alert", etc.)',
      'Add aria-expanded for collapsible elements',
      'Use aria-hidden="true" for decorative icons',
      'Implement aria-describedby for additional context',
    ],
  },
];

export const accessibilityCodeExample = `<!-- Accessible Glass Button -->
<button 
  class="glass-container glass-container--small"
  aria-label="Search the site"
>
  <div class="glass-content">
    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    <span>Search</span>
  </div>
</button>

<!-- Accessible Glass Modal -->
<div 
  class="glass-modal" 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
>
  <div class="glass-modal__content">
    <h2 id="modal-title">Confirmation</h2>
    <p>Are you sure you want to proceed?</p>
    <button aria-label="Close dialog">Close</button>
  </div>
</div>

<!-- Accessible Glass Form -->
<form class="glass-form">
  <label for="email" class="glass-form__label">
    Email Address
  </label>
  <input 
    type="email" 
    id="email"
    class="glass-form__input"
    aria-required="true"
    aria-describedby="email-hint"
  />
  <span id="email-hint" class="glass-form__hint">
    We'll never share your email
  </span>
</form>`;
