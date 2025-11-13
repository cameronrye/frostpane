/**
 * Package Configuration Tests
 * Tests to ensure package.json is properly configured
 */

const fs = require('fs');
const path = require('path');
const { describe, it } = require('node:test');
const assert = require('node:assert');

const packagePath = path.join(__dirname, '../package.json');
const pkg = require(packagePath);

describe('Package Configuration', () => {
  it('should have correct package name', () => {
    assert.strictEqual(pkg.name, 'frostpane', 'Package name should be "frostpane"');
  });

  it('should have version 1.1.0', () => {
    assert.strictEqual(pkg.version, '1.1.0', 'Version should be 1.1.0');
  });

  it('should have description', () => {
    assert.ok(pkg.description, 'Should have a description');
    assert.ok(pkg.description.length > 10, 'Description should be meaningful');
  });

  it('should have MIT license', () => {
    assert.strictEqual(pkg.license, 'MIT', 'License should be MIT');
  });

  it('should have author', () => {
    assert.ok(pkg.author, 'Should have an author');
    assert.ok(pkg.author.includes('Cameron Rye'), 'Author should be Cameron Rye');
  });

  it('should have repository information', () => {
    assert.ok(pkg.repository, 'Should have repository information');
    assert.strictEqual(pkg.repository.type, 'git', 'Repository type should be git');
    assert.ok(pkg.repository.url.includes('github.com'), 'Repository should be on GitHub');
  });

  it('should have homepage', () => {
    assert.ok(pkg.homepage, 'Should have homepage');
    assert.ok(pkg.homepage.includes('github.io'), 'Homepage should be GitHub Pages');
  });

  it('should have keywords', () => {
    assert.ok(Array.isArray(pkg.keywords), 'Keywords should be an array');
    assert.ok(pkg.keywords.length > 5, 'Should have multiple keywords');
    assert.ok(pkg.keywords.includes('glass'), 'Should include "glass" keyword');
    assert.ok(pkg.keywords.includes('glassmorphism'), 'Should include "glassmorphism" keyword');
  });
});

describe('Package Exports', () => {
  it('should have main field pointing to CSS', () => {
    assert.ok(pkg.main, 'Should have main field');
    assert.ok(pkg.main.includes('.css'), 'Main should point to CSS file');
  });

  it('should have style field', () => {
    assert.ok(pkg.style, 'Should have style field');
    assert.ok(pkg.style.includes('.css'), 'Style should point to CSS file');
  });

  it('should have sass field', () => {
    assert.ok(pkg.sass, 'Should have sass field');
    assert.ok(pkg.sass.includes('.scss'), 'Sass should point to SCSS file');
  });

  it('should have exports field', () => {
    assert.ok(pkg.exports, 'Should have exports field');
    assert.ok(typeof pkg.exports === 'object', 'Exports should be an object');
  });

  it('should export main entry point', () => {
    assert.ok(pkg.exports['.'], 'Should export main entry point');
    assert.ok(pkg.exports['.'].sass, 'Main export should have sass field');
    assert.ok(pkg.exports['.'].style, 'Main export should have style field');
    assert.ok(pkg.exports['.'].default, 'Main export should have default field');
  });

  it('should export core version', () => {
    assert.ok(pkg.exports['./core'], 'Should export core version');
    assert.ok(pkg.exports['./core'].sass, 'Core export should have sass field');
    assert.ok(pkg.exports['./core'].style, 'Core export should have style field');
  });

  it('should export convenience paths', () => {
    assert.ok(pkg.exports['./scss'], 'Should export ./scss path');
    assert.ok(pkg.exports['./css'], 'Should export ./css path');
    assert.ok(pkg.exports['./scss/core'], 'Should export ./scss/core path');
    assert.ok(pkg.exports['./css/core'], 'Should export ./css/core path');
  });

  it('should export unminified versions', () => {
    assert.ok(pkg.exports['./css/unminified'], 'Should export unminified CSS');
    assert.ok(pkg.exports['./css/core/unminified'], 'Should export unminified core CSS');
  });
});

describe('Package Files', () => {
  it('should have files field', () => {
    assert.ok(Array.isArray(pkg.files), 'Files should be an array');
    assert.ok(pkg.files.length > 0, 'Files array should not be empty');
  });

  it('should include dist directory', () => {
    assert.ok(pkg.files.includes('dist'), 'Should include dist directory');
  });

  it('should include src directory', () => {
    assert.ok(pkg.files.includes('src'), 'Should include src directory');
  });

  it('should include README', () => {
    assert.ok(pkg.files.includes('README.md'), 'Should include README.md');
  });
});

describe('Package Scripts', () => {
  it('should have build script', () => {
    assert.ok(pkg.scripts.build, 'Should have build script');
  });

  it('should have build:full script', () => {
    assert.ok(pkg.scripts['build:full'], 'Should have build:full script');
  });

  it('should have build:core script', () => {
    assert.ok(pkg.scripts['build:core'], 'Should have build:core script');
  });

  it('should have watch scripts', () => {
    assert.ok(pkg.scripts.watch, 'Should have watch script');
    assert.ok(pkg.scripts['watch:core'], 'Should have watch:core script');
  });

  it('should have lint scripts', () => {
    assert.ok(pkg.scripts.lint, 'Should have lint script');
    assert.ok(pkg.scripts['lint:fix'], 'Should have lint:fix script');
  });

  it('should have prepublishOnly script', () => {
    assert.ok(pkg.scripts.prepublishOnly, 'Should have prepublishOnly script');
    assert.ok(pkg.scripts.prepublishOnly.includes('build'), 'prepublishOnly should run build');
  });
});

describe('Package Dependencies', () => {
  it('should have no runtime dependencies', () => {
    assert.ok(
      !pkg.dependencies || Object.keys(pkg.dependencies).length === 0,
      'Should have no runtime dependencies (zero dependencies library)'
    );
  });

  it('should have devDependencies', () => {
    assert.ok(pkg.devDependencies, 'Should have devDependencies');
    assert.ok(
      Object.keys(pkg.devDependencies).length > 0,
      'Should have at least one devDependency'
    );
  });

  it('should have sass as devDependency', () => {
    assert.ok(pkg.devDependencies.sass, 'Should have sass as devDependency');
  });

  it('should have postcss tools', () => {
    assert.ok(pkg.devDependencies.postcss, 'Should have postcss');
    assert.ok(pkg.devDependencies['postcss-cli'], 'Should have postcss-cli');
    assert.ok(pkg.devDependencies.autoprefixer, 'Should have autoprefixer');
  });

  it('should have stylelint', () => {
    assert.ok(pkg.devDependencies.stylelint, 'Should have stylelint');
    assert.ok(
      pkg.devDependencies['stylelint-config-standard-scss'],
      'Should have stylelint config'
    );
  });
});
