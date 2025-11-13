# Publishing Guide

This guide covers how to publish the Frostpane library to npm and deploy the example site to GitHub Pages.

> **⚡ Quick Start:** For most releases, use the [automated GitHub Actions workflow](#automated-release-recommended).

## Semantic Versioning

Frostpane follows [Semantic Versioning](https://semver.org/) (SemVer):

**Version Format:** `MAJOR.MINOR.PATCH` (e.g., 1.2.3)

- **MAJOR**: Breaking changes (1.0.0 → 2.0.0)
- **MINOR**: New features, backward compatible (1.0.0 → 1.1.0)
- **PATCH**: Bug fixes, backward compatible (1.0.0 → 1.0.1)
- **Pre-release**: Beta or alpha versions (e.g., 1.2.3-beta.0)

### Conventional Commits

For automatic changelog generation and version bumping, use conventional commit messages:

```
feat: add new glass variant
fix: correct backdrop blur on Safari
docs: update installation instructions
chore: update dependencies
refactor: simplify CSS structure
perf: optimize blur performance
```

**Format:** `<type>: <description>`

**Types:**
- `feat`: New feature (triggers MINOR bump)
- `fix`: Bug fix (triggers PATCH bump)
- `feat!` or `BREAKING CHANGE`: Breaking change (triggers MAJOR bump)
- `docs`: Documentation only
- `chore`: Maintenance tasks
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test updates

## Automated Release (Recommended)

The easiest way to release is using the GitHub Actions workflow:

1. **Ensure commits follow conventional commit format** (for automatic changelog)
2. **Go to Actions tab** in GitHub
3. **Select "Release" workflow**
4. **Click "Run workflow"**
5. **Choose version bump type**: `patch`, `minor`, `major`, `beta`, or `alpha`
6. **Optional: Enable "Dry run"** to preview changes without publishing
7. **Click "Run workflow"**

The workflow automatically:
- ✅ Bumps version using standard-version
- ✅ Generates/updates CHANGELOG.md from conventional commits
- ✅ Validates version consistency
- ✅ Builds the library and example site
- ✅ Verifies build artifacts
- ✅ Commits and tags
- ✅ Pushes to GitHub (with automatic rollback on failure)
- ✅ Publishes to npm (with automatic rollback on failure)
- ✅ Creates GitHub release with extracted changelog

**Requirements:**
- `NPM_TOKEN` secret configured in repository settings
- Commits follow [conventional commit format](https://www.conventionalcommits.org/)

**New Features:**
- 🎯 **Dry Run Mode**: Test without publishing
- 🎯 **Pre-release Support**: Create beta/alpha versions
- 🎯 **Automatic Rollback**: Reverts on failure
- 🎯 **Automatic Changelog**: Generated from commits

---

## Manual Release (Alternative)

If you need more control or want to test locally:

### Prerequisites

- [ ] You have npm account and are logged in (`npm login`)
- [ ] You have write access to the GitHub repository
- [ ] All tests pass (`npm run build`)
- [ ] All version checks pass (`npm run validate-versions`)

## Publishing to npm

### 1. Prepare the Release

```bash
# Ensure you're on main branch and up to date
git checkout main
git pull origin main

# Install dependencies
npm install

# Build the library
npm run build:lib
```

### 2. Test the Package

```bash
# Navigate to the library package
cd packages/frostpane

# Dry run to see what will be published
npm publish --dry-run

# Check the package contents
npm pack
tar -xvzf frostpane-*.tgz
ls -la package/
```

### 3. Publish to npm

```bash
# Still in packages/frostpane directory
npm publish

# Or for a beta release
npm publish --tag beta
```

### 4. Verify the Publication

```bash
# Check on npm
npm view frostpane

# Test installation
mkdir test-install
cd test-install
npm init -y
npm install frostpane
```

### 5. Create GitHub Release

```bash
# Tag the release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# Create release on GitHub
# Go to: https://github.com/cameronrye/frostpane/releases/new
# - Select the tag you just created
# - Add release notes from CHANGELOG.md
# - Publish release
```

## Deploying to GitHub Pages

### Automatic Deployment

GitHub Pages is configured to deploy automatically when you push to the `main` branch.

1. **Enable GitHub Pages** (one-time setup):
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will deploy automatically

2. **Push to main**:
   ```bash
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to Actions tab in GitHub
   - Watch the "Deploy to GitHub Pages" workflow
   - Site will be live at: https://cameronrye.github.io/frostpane

### Manual Deployment

If you need to manually trigger deployment:

1. Go to Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select branch (main)
5. Click "Run workflow"

## Version Bumping with standard-version

We use `standard-version` for automated version management:

### Automatic Version Bump

```bash
# Automatically determines version bump from conventional commits
npm run release

# Dry run to preview changes
npm run release:dry-run
```

### Manual Version Bump

```bash
# Patch Release (1.0.0 → 1.0.1)
npm run release:patch

# Minor Release (1.0.0 → 1.1.0)
npm run release:minor

# Major Release (1.0.0 → 2.0.0)
npm run release:major

# Pre-release versions
npm run release:beta   # 1.0.0 → 1.0.1-beta.0
npm run release:alpha  # 1.0.0 → 1.0.1-alpha.0
```

This will:
- ✅ Bump version in package.json files
- ✅ Generate/update CHANGELOG.md from conventional commits
- ✅ Validate version consistency
- ✅ Create git commit
- ✅ Create git tag

Then push and publish:
```bash
git push --follow-tags origin main
cd packages/frostpane
npm publish

# For pre-releases, use the appropriate tag
npm publish --tag beta
npm publish --tag alpha
```

**Note:** Version consistency is automatically validated. Only the library and root package.json have version fields. The example package uses `"frostpane": "*"` to reference the local version.

---

## Version Consistency

### Single Source of Truth

The version in `packages/frostpane/package.json` is the source of truth.

### Automatic Synchronization

Package versions are kept in sync:
- `packages/frostpane/package.json` (published package) - **source of truth**
- `package.json` (monorepo root) - synced by standard-version
- `packages/example/package.json` - **no version field** (uses `"frostpane": "*"`)

### Smart Version References

**Example Site:**
The example site dynamically imports the version:
```astro
import pkg from '../../../frostpane/package.json';
const version = pkg.version;
```

**Documentation:**
README uses `@1` (major version) for CDN links:
```html
<!-- Automatically gets latest 1.x version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/frostpane@1/dist/frostpane.css">
```

Benefits:
- Users automatically get bug fixes and new features
- No need to update documentation for every release
- Users can still pin to specific versions if needed (e.g., `@1.2.3`)

### Validation

Version consistency is validated automatically:
- ✅ On every CI build (via GitHub Actions)
- ✅ After version bump (via standard-version postbump hook)
- ✅ Before publishing (in release workflow)

**Manual validation:**
```bash
npm run validate-versions
```

This checks that `packages/frostpane/package.json` and `package.json` have matching versions.

---

## Advanced Features

### Dry Run Mode

Test the release process without actually publishing:

**Via GitHub Actions:**
1. Go to Actions → Release workflow
2. Enable "Dry run" checkbox
3. Run the workflow

**Via CLI:**
```bash
npm run release:dry-run
```

This will:
- Bump versions locally
- Generate changelog
- Build artifacts
- Show what would be published
- **NOT** push to GitHub or publish to npm

### Pre-release Versions

Create beta or alpha releases for testing:

**Via GitHub Actions:**
1. Select "beta" or "alpha" as version type
2. Run workflow

**Via CLI:**
```bash
npm run release:beta   # Creates 1.0.1-beta.0
npm run release:alpha  # Creates 1.0.1-alpha.0
```

Pre-releases are:
- Tagged as pre-release on GitHub
- Published with `beta` or `alpha` tag on npm
- Not marked as "latest" on npm

**Install pre-releases:**
```bash
npm install frostpane@beta
npm install frostpane@alpha
npm install frostpane@1.2.3-beta.0  # Specific version
```

### Automated Rollback

The release workflow includes automatic rollback:

**On Push Failure:**
- Deletes the git tag
- Resets to previous commit
- Exits with error

**On Publish Failure:**
- Deletes remote git tag
- Reverts the commit
- Pushes revert to GitHub
- Exits with error

You'll need to manually deprecate the npm package if it was published before the failure.

---

## Troubleshooting

### npm publish fails with 403

- Ensure you're logged in: `npm whoami`
- Check package name isn't taken: `npm view frostpane`
- Verify you have publish rights
- Check `NPM_TOKEN` secret is configured correctly in GitHub

### GitHub Pages not updating

- Check Actions tab for errors
- Verify Pages is enabled in Settings
- Ensure workflow has proper permissions
- Check astro.config.mjs has correct base path

### Build fails

- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Try building each package separately
- Check for TypeScript or Sass errors

### Release workflow fails

- **Push fails**: Check GitHub Actions has write permissions
- **Publish fails**: Verify `NPM_TOKEN` secret
- **Build fails**: Run `npm run build` locally to debug
- **Changelog extraction fails**: Ensure CHANGELOG.md follows correct format

The workflow includes automatic rollback on push/publish failures.

### Need to rollback a release

**Automated rollback script:**

```bash
./scripts/rollback-release.sh 1.2.3
```

This script will:
1. Delete the tag locally and remotely
2. Revert the release commit
3. Push changes to GitHub
4. Provide instructions for deprecating the npm package

**Manual rollback steps:**
```bash
# Delete the tag locally and remotely
git tag -d v1.2.3
git push origin :refs/tags/v1.2.3

# Revert the commit
git revert HEAD
git push origin main

# Deprecate the npm version (don't unpublish)
npm deprecate frostpane@1.2.3 "This version has been deprecated and rolled back"

# Delete GitHub release (optional)
gh release delete v1.2.3 --yes
```

## Checklist Before Publishing

### For Automated Release (GitHub Actions)
- [ ] All changes committed and pushed
- [ ] Commits follow conventional commit format
- [ ] Build passes locally: `npm run build`
- [ ] Version validation passes: `npm run validate-versions`
- [ ] NPM_TOKEN secret is configured in GitHub
- [ ] Consider running with "Dry run" enabled first

### For Manual Release
- [ ] All changes committed and pushed
- [ ] Commits follow conventional commit format
- [ ] Version bumped: `npm run release`
- [ ] CHANGELOG.md updated (automatic with standard-version)
- [ ] Build passes: `npm run build`
- [ ] Version validation passes: `npm run validate-versions`
- [ ] Dry run successful: `npm publish --dry-run`
- [ ] Git tag created and pushed
- [ ] npm published (with correct tag for pre-releases)
- [ ] GitHub release created
- [ ] GitHub Pages deployed
- [ ] Verified installation works

---

## Configuration Files

The versioning and release workflow uses these configuration files:

- **`.versionrc.json`** - standard-version configuration
  - Defines which files to bump
  - Configures changelog generation
  - Sets up commit types

- **`scripts/validate-versions.cjs`** - Version validation script
  - Checks version consistency across package.json files
  - Runs automatically in CI and after version bumps

- **`scripts/rollback-release.sh`** - Automated rollback script
  - Reverts failed releases
  - Deletes tags and commits
  - Provides deprecation instructions

- **`.github/workflows/release.yml`** - Automated release workflow
  - Handles version bumping, building, and publishing
  - Includes automatic rollback on failure
  - Supports dry-run and pre-releases

- **`.github/workflows/ci.yml`** - CI with version validation
  - Runs on every push
  - Validates version consistency

- **`.github/release-template.md`** - Release notes template
  - Guidelines for release notes format

---

## What Changed

### Key Improvements

The versioning workflow was completely modernized with these improvements:

**1. Single, Consistent Workflow**
- GitHub Actions and local releases now use the same tool (standard-version)
- No more conflicting approaches
- Reduced maintenance burden

**2. Automatic Changelog Generation**
- CHANGELOG.md is now auto-generated from conventional commits
- No manual updates needed before release
- Consistent format across releases

**3. Smart Versioning**
- README uses `@1` (major version) for CDN links - no updates needed
- Example site dynamically imports version - no updates needed
- Only 2 package.json files need version syncing (down from 3)

**4. Error Handling & Rollback**
- Automatic rollback on push failure
- Automatic rollback on publish failure
- Manual rollback script for edge cases
- Build artifact verification

**5. Pre-release Support**
- Beta and alpha releases supported
- Proper npm tagging (not marked as "latest")
- GitHub pre-release flag

**6. Dry Run Mode**
- Test releases without publishing
- Preview changelog and version changes
- Verify build artifacts

### Removed Legacy Code

The following legacy components were removed:
- ❌ `scripts/version-updater.cjs` - Custom version updater (no longer needed)
- ❌ `detect-indent`, `detect-newline`, `stringify-package` dependencies (unused)
- ❌ Manual sed-based version updates in GitHub Actions
- ❌ Deprecated `actions/create-release@v1` action

---

## Additional Resources

- [Semantic Versioning](https://semver.org/) - Version numbering guidelines
- [Conventional Commits](https://www.conventionalcommits.org/) - Commit message format
- [standard-version](https://github.com/conventional-changelog/standard-version) - Automated versioning tool