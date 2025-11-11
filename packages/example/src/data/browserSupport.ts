export interface BrowserInfo {
  name: string;
  icon: string;
  minVersion: string;
  support: 'full' | 'partial' | 'none';
  notes?: string;
}

export const browsers: BrowserInfo[] = [
  {
    name: 'Chrome',
    icon: 'fa-brands fa-chrome',
    minVersion: '76+',
    support: 'full',
    notes: 'Full support for backdrop-filter since Chrome 76',
  },
  {
    name: 'Edge',
    icon: 'fa-brands fa-edge',
    minVersion: '79+',
    support: 'full',
    notes: 'Full support in Chromium-based Edge',
  },
  {
    name: 'Safari',
    icon: 'fa-brands fa-safari',
    minVersion: '9+',
    support: 'full',
    notes: 'Requires -webkit- prefix for backdrop-filter',
  },
  {
    name: 'Firefox',
    icon: 'fa-brands fa-firefox-browser',
    minVersion: '103+',
    support: 'full',
    notes: 'Full support since Firefox 103',
  },
  {
    name: 'Opera',
    icon: 'fa-brands fa-opera',
    minVersion: '63+',
    support: 'full',
    notes: 'Full support in Chromium-based Opera',
  },
  {
    name: 'iOS Safari',
    icon: 'fa-brands fa-safari',
    minVersion: '9+',
    support: 'full',
    notes: 'Excellent mobile support with -webkit- prefix',
  },
  {
    name: 'Android Chrome',
    icon: 'fa-brands fa-chrome',
    minVersion: '76+',
    support: 'full',
    notes: 'Full support on modern Android devices',
  },
];

export interface CompatibilityNote {
  title: string;
  description: string;
  icon: string;
  type: 'info' | 'warning' | 'tip';
}

export const compatibilityNotes: CompatibilityNote[] = [
  {
    title: 'Backdrop Filter Support',
    description:
      'The backdrop-filter property is the core of glass effects. It is well-supported in modern browsers but may require vendor prefixes for Safari.',
    icon: 'fa-solid fa-filter',
    type: 'info',
  },
  {
    title: 'Safari Prefix Required',
    description:
      'Safari requires the -webkit- prefix for backdrop-filter. Frostpane includes this automatically in the compiled CSS.',
    icon: 'fa-solid fa-exclamation-triangle',
    type: 'warning',
  },
  {
    title: 'Performance Considerations',
    description:
      'Backdrop blur effects are GPU-accelerated but can impact performance on lower-end devices. Test on target devices and consider reducing blur intensity for better performance.',
    icon: 'fa-solid fa-gauge-high',
    type: 'tip',
  },
  {
    title: 'Fallback Strategy',
    description:
      'For unsupported browsers, the glass effect gracefully degrades to a semi-transparent background without blur. Consider using @supports to provide alternative styles.',
    icon: 'fa-solid fa-shield-halved',
    type: 'info',
  },
  {
    title: 'Mobile Support',
    description:
      'Glass effects work excellently on modern mobile devices (iOS 9+, Android Chrome 76+). Mobile Safari has particularly good support with hardware acceleration.',
    icon: 'fa-solid fa-mobile-screen',
    type: 'tip',
  },
];

export const fallbackExample = `/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(10px)) {
  .glass-container {
    background: rgba(255, 255, 255, 0.4);
    /* Slightly more opaque without blur */
  }
}

/* Or use feature detection */
@supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
  .glass-container {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}`;
