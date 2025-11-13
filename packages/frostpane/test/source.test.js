/**
 * Source File Tests
 * Tests to ensure source SCSS files are properly structured
 */

const fs = require('fs');
const path = require('path');
const { describe, it } = require('node:test');
const assert = require('node:assert');

const srcDir = path.join(__dirname, '../src');

describe('Source Files', () => {
  it('should have main frostpane.scss file', () => {
    const file = path.join(srcDir, 'frostpane.scss');
    assert.ok(fs.existsSync(file), 'frostpane.scss should exist');
  });

  it('should have frostpane-core.scss file', () => {
    const file = path.join(srcDir, 'frostpane-core.scss');
    assert.ok(fs.existsSync(file), 'frostpane-core.scss should exist');
  });

  it('should have base directory with required files', () => {
    const baseDir = path.join(srcDir, 'base');
    assert.ok(fs.existsSync(baseDir), 'base directory should exist');

    const requiredFiles = [
      '_variables.scss',
      '_variables-core.scss',
      '_mixins.scss',
      '_accessibility.scss',
    ];

    requiredFiles.forEach(file => {
      const filePath = path.join(baseDir, file);
      assert.ok(fs.existsSync(filePath), `${file} should exist in base directory`);
    });
  });

  it('should have components directory with required files', () => {
    const componentsDir = path.join(srcDir, 'components');
    assert.ok(fs.existsSync(componentsDir), 'components directory should exist');

    const requiredFiles = [
      '_glass-core.scss',
      '_glass-variants.scss',
      '_glass-content.scss',
      '_forms.scss',
    ];

    requiredFiles.forEach(file => {
      const filePath = path.join(componentsDir, file);
      assert.ok(fs.existsSync(filePath), `${file} should exist in components directory`);
    });
  });

  it('should have themes directory', () => {
    const themesDir = path.join(srcDir, 'themes');
    assert.ok(fs.existsSync(themesDir), 'themes directory should exist');

    const file = path.join(themesDir, '_themes.scss');
    assert.ok(fs.existsSync(file), '_themes.scss should exist');
  });

  it('should have utilities directory', () => {
    const utilitiesDir = path.join(srcDir, 'utilities');
    assert.ok(fs.existsSync(utilitiesDir), 'utilities directory should exist');

    const file = path.join(utilitiesDir, '_utilities.scss');
    assert.ok(fs.existsSync(file), '_utilities.scss should exist');
  });
});

describe('SCSS Content Validation', () => {
  it('main file should use @use and @forward directives', () => {
    const file = path.join(srcDir, 'frostpane.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('@use'), 'Should use @use directive');
    assert.ok(content.includes('@forward'), 'Should use @forward directive');
  });

  it('core file should use @use directive', () => {
    const file = path.join(srcDir, 'frostpane-core.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('@use'), 'Should use @use directive');
  });

  it('should contain version number in headers', () => {
    const files = ['frostpane.scss', 'frostpane-core.scss'];

    files.forEach(filename => {
      const file = path.join(srcDir, filename);
      const content = fs.readFileSync(file, 'utf8');
      assert.ok(content.includes('v1.1.0'), `${filename} should contain version number`);
    });
  });

  it('variables file should define CSS custom properties', () => {
    const file = path.join(srcDir, 'base/_variables.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('--fp-'), 'Should define CSS custom properties with fp- prefix');
    assert.ok(content.includes(':root'), 'Should define properties in :root');
  });

  it('core variables should be a subset of full variables', () => {
    const fullFile = path.join(srcDir, 'base/_variables.scss');
    const coreFile = path.join(srcDir, 'base/_variables-core.scss');

    const fullContent = fs.readFileSync(fullFile, 'utf8');
    const coreContent = fs.readFileSync(coreFile, 'utf8');

    // Core should be smaller
    assert.ok(
      coreContent.length < fullContent.length,
      'Core variables should be smaller than full'
    );

    // Both should define glass properties
    assert.ok(coreContent.includes('--fp-glass-'), 'Core should define glass properties');
    assert.ok(fullContent.includes('--fp-glass-'), 'Full should define glass properties');
  });

  it('mixins file should define mixins', () => {
    const file = path.join(srcDir, 'base/_mixins.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('@mixin'), 'Should define mixins');
  });

  it('accessibility file should handle reduced motion', () => {
    const file = path.join(srcDir, 'base/_accessibility.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(
      content.includes('prefers-reduced-motion'),
      'Should handle reduced motion preference'
    );
  });

  it('themes file should define dark mode', () => {
    const file = path.join(srcDir, 'themes/_themes.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('prefers-color-scheme: dark'), 'Should define dark mode');
    assert.ok(content.includes('[data-theme="dark"]'), 'Should support data-theme attribute');
  });

  it('glass-core should define .glass-container', () => {
    const file = path.join(srcDir, 'components/_glass-core.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('.glass-container'), 'Should define .glass-container class');
    assert.ok(content.includes('backdrop-filter'), 'Should use backdrop-filter');
  });

  it('forms file should define form components', () => {
    const file = path.join(srcDir, 'components/_forms.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('.glass-button'), 'Should define .glass-button');
    assert.ok(content.includes('.glass-input'), 'Should define .glass-input');
  });

  it('utilities file should define utility classes', () => {
    const file = path.join(srcDir, 'utilities/_utilities.scss');
    const content = fs.readFileSync(file, 'utf8');

    assert.ok(content.includes('.fp-'), 'Should define utility classes with fp- prefix');
  });
});
