/**
 * Type definitions for @frostpane/core
 *
 * Frostpane is a CSS library for creating frosted glass effects.
 * This file provides TypeScript definitions for importing the library.
 */

/**
 * Import the compiled CSS file
 * @example
 * ```typescript
 * import '@frostpane/core/css';
 * ```
 */
declare module '@frostpane/core/css' {
  const content: string;
  export default content;
}

/**
 * Import the source SCSS file
 * @example
 * ```typescript
 * import '@frostpane/core/scss';
 * ```
 */
declare module '@frostpane/core/scss' {
  const content: string;
  export default content;
}

/**
 * Import the library (defaults to CSS)
 * @example
 * ```typescript
 * import '@frostpane/core';
 * ```
 */
declare module '@frostpane/core' {
  const content: string;
  export default content;
}

/**
 * CSS Custom Properties used by Frostpane
 * These can be overridden in your CSS to customize the appearance
 */
export interface FrostpaneCustomProperties {
  /** Primary glass background color with transparency */
  '--fp-glass-bg': string;
  /** Secondary glass background color */
  '--fp-glass-bg-secondary': string;
  /** Tertiary glass background color */
  '--fp-glass-bg-tertiary': string;
  /** Glass border color */
  '--fp-glass-border': string;
  /** Glass shadow color */
  '--fp-glass-shadow': string;
  /** Primary text color */
  '--fp-text-primary': string;
  /** Secondary text color */
  '--fp-text-secondary': string;
  /** Muted text color */
  '--fp-text-muted': string;
  /** Accent color */
  '--fp-accent': string;
  /** Accent hover color */
  '--fp-accent-hover': string;
  /** Success color */
  '--fp-success': string;
  /** Warning color */
  '--fp-warning': string;
  /** Error color */
  '--fp-error': string;
  /** Info color */
  '--fp-info': string;
  /** Blur amount for glass effect */
  '--fp-blur': string;
  /** Border radius */
  '--fp-radius': string;
  /** Large border radius */
  '--fp-radius-lg': string;
  /** Small border radius */
  '--fp-radius-sm': string;
  /** Extra small spacing */
  '--fp-spacing-xs': string;
  /** Small spacing */
  '--fp-spacing-sm': string;
  /** Medium spacing */
  '--fp-spacing-md': string;
  /** Large spacing */
  '--fp-spacing-lg': string;
  /** Extra large spacing */
  '--fp-spacing-xl': string;
  /** Base font size */
  '--fp-font-size-base': string;
  /** Small font size */
  '--fp-font-size-sm': string;
  /** Large font size */
  '--fp-font-size-lg': string;
  /** Extra large font size */
  '--fp-font-size-xl': string;
  /** Base font family */
  '--fp-font-family-base': string;
  /** Heading font family */
  '--fp-font-family-heading': string;
  /** Monospace font family */
  '--fp-font-family-mono': string;
  /** Fast transition duration */
  '--fp-transition-fast': string;
  /** Medium transition duration */
  '--fp-transition-medium': string;
  /** Slow transition duration */
  '--fp-transition-slow': string;
}
