#!/usr/bin/env node

/**
 * Version Validation Script
 *
 * This script validates that version numbers are consistent across all package.json
 * files in the Frostpane monorepo.
 *
 * Note: We don't validate README.md or Astro files because:
 * - README uses @1 (major version) for CDN links - smart versioning
 * - Example site dynamically imports version from package.json
 *
 * Exit codes:
 * 0 - All versions are consistent
 * 1 - Version inconsistencies found
 */

const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

// Get the source of truth version from the library package.json
const libraryPkgPath = path.join(__dirname, '../packages/frostpane/package.json');
const libraryPkg = JSON.parse(fs.readFileSync(libraryPkgPath, 'utf8'));
const expectedVersion = libraryPkg.version;

log(`\n🔍 Validating version ${expectedVersion} across all files...\n`, colors.blue);

// Define files to check with their patterns
const filesToCheck = [
  {
    path: 'package.json',
    patterns: [
      {
        regex: /"version":\s*"\d+\.\d+\.\d+(-[a-z]+\.\d+)?"/g,
        expected: `"version": "${expectedVersion}"`,
        description: 'Root package version'
      }
    ]
  }
];

let errors = 0;
let warnings = 0;

// Check each file
filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '..', file.path);
  
  if (!fs.existsSync(filePath)) {
    log(`⚠️  File not found: ${file.path}`, colors.yellow);
    warnings++;
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  file.patterns.forEach(pattern => {
    const matches = content.match(pattern.regex);
    
    if (!matches) {
      log(`⚠️  No matches found for ${pattern.description} in ${file.path}`, colors.yellow);
      warnings++;
      return;
    }
    
    matches.forEach(match => {
      if (match !== pattern.expected) {
        log(`❌ ${file.path}: ${pattern.description}`, colors.red);
        log(`   Found: ${match}`, colors.red);
        log(`   Expected: ${pattern.expected}`, colors.red);
        errors++;
      }
    });
  });
});

// Summary
log('\n' + '='.repeat(60), colors.blue);
if (errors > 0) {
  log(`\n❌ Found ${errors} version inconsistencies`, colors.red);
  if (warnings > 0) {
    log(`⚠️  Found ${warnings} warnings`, colors.yellow);
  }
  log('\nPlease update the versions to match the library version:', colors.yellow);
  log(`   ${expectedVersion}`, colors.green);
  process.exit(1);
} else if (warnings > 0) {
  log(`\n⚠️  Found ${warnings} warnings but no errors`, colors.yellow);
  log('✅ All version references are consistent', colors.green);
  process.exit(0);
} else {
  log('\n✅ All versions are consistent!', colors.green);
  log(`   Current version: ${expectedVersion}`, colors.blue);
  process.exit(0);
}

