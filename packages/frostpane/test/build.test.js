/**
 * Build Verification Tests
 * Tests to ensure all build artifacts are generated correctly
 */

const fs = require('fs');
const path = require('path');
const { describe, it } = require('node:test');
const assert = require('node:assert');

const distDir = path.join(__dirname, '../dist');

describe('Build Artifacts', () => {
  it('should have dist directory', () => {
    assert.ok(fs.existsSync(distDir), 'dist directory should exist');
  });

  it('should have frostpane.css (minified)', () => {
    const file = path.join(distDir, 'frostpane.css');
    assert.ok(fs.existsSync(file), 'frostpane.css should exist');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.length > 0, 'frostpane.css should not be empty');
  });

  it('should have frostpane.unminified.css', () => {
    const file = path.join(distDir, 'frostpane.unminified.css');
    assert.ok(fs.existsSync(file), 'frostpane.unminified.css should exist');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.length > 0, 'frostpane.unminified.css should not be empty');
  });

  it('should have frostpane-core.css (minified)', () => {
    const file = path.join(distDir, 'frostpane-core.css');
    assert.ok(fs.existsSync(file), 'frostpane-core.css should exist');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.length > 0, 'frostpane-core.css should not be empty');
  });

  it('should have frostpane-core.unminified.css', () => {
    const file = path.join(distDir, 'frostpane-core.unminified.css');
    assert.ok(fs.existsSync(file), 'frostpane-core.unminified.css should exist');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.length > 0, 'frostpane-core.unminified.css should not be empty');
  });

  it('should have source maps for minified files', () => {
    const files = ['frostpane.css.map', 'frostpane-core.css.map'];

    files.forEach(file => {
      const filePath = path.join(distDir, file);
      assert.ok(fs.existsSync(filePath), `${file} should exist`);
    });
  });
});

describe('CSS Content Validation', () => {
  it('should contain copyright header in full version', () => {
    const file = path.join(distDir, 'frostpane.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('Frostpane v1.1.0'), 'Should contain version in header');
    assert.ok(content.includes('Copyright'), 'Should contain copyright notice');
    assert.ok(content.includes('MIT'), 'Should contain license information');
  });

  it('should contain copyright header in core version', () => {
    const file = path.join(distDir, 'frostpane-core.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('Frostpane Core v1.1.0'), 'Should contain version in header');
    assert.ok(content.includes('Copyright'), 'Should contain copyright notice');
  });

  it('should contain glass-container class in full version', () => {
    const file = path.join(distDir, 'frostpane.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('.glass-container'), 'Should contain .glass-container class');
  });

  it('should contain glass-container class in core version', () => {
    const file = path.join(distDir, 'frostpane-core.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('.glass-container'), 'Should contain .glass-container class');
  });

  it('should contain CSS custom properties', () => {
    const file = path.join(distDir, 'frostpane.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('--fp-glass-bg'), 'Should contain --fp-glass-bg variable');
    assert.ok(content.includes('--fp-glass-blur'), 'Should contain --fp-glass-blur variable');
    assert.ok(
      content.includes('--fp-glass-highlight'),
      'Should contain --fp-glass-highlight variable'
    );
  });

  it('should contain backdrop-filter', () => {
    const file = path.join(distDir, 'frostpane.unminified.css');
    const content = fs.readFileSync(file, 'utf8');
    assert.ok(content.includes('backdrop-filter'), 'Should contain backdrop-filter property');
  });

  it('full version should be larger than core version', () => {
    const fullFile = path.join(distDir, 'frostpane.css');
    const coreFile = path.join(distDir, 'frostpane-core.css');

    const fullSize = fs.statSync(fullFile).size;
    const coreSize = fs.statSync(coreFile).size;

    assert.ok(fullSize > coreSize, 'Full version should be larger than core version');
  });

  it('minified version should be smaller than unminified', () => {
    const minFile = path.join(distDir, 'frostpane.css');
    const unminFile = path.join(distDir, 'frostpane.unminified.css');

    const minSize = fs.statSync(minFile).size;
    const unminSize = fs.statSync(unminFile).size;

    assert.ok(minSize < unminSize, 'Minified version should be smaller than unminified');
  });

  it('should contain utility classes in full version only', () => {
    const fullFile = path.join(distDir, 'frostpane.unminified.css');
    const coreFile = path.join(distDir, 'frostpane-core.unminified.css');

    const fullContent = fs.readFileSync(fullFile, 'utf8');
    const coreContent = fs.readFileSync(coreFile, 'utf8');

    assert.ok(fullContent.includes('.fp-p-'), 'Full version should contain utility classes');
    assert.ok(!coreContent.includes('.fp-p-'), 'Core version should not contain utility classes');
  });

  it('should contain form components in full version only', () => {
    const fullFile = path.join(distDir, 'frostpane.unminified.css');
    const coreFile = path.join(distDir, 'frostpane-core.unminified.css');

    const fullContent = fs.readFileSync(fullFile, 'utf8');
    const coreContent = fs.readFileSync(coreFile, 'utf8');

    assert.ok(fullContent.includes('.glass-button'), 'Full version should contain form components');
    assert.ok(
      !coreContent.includes('.glass-button'),
      'Core version should not contain form components'
    );
  });
});
