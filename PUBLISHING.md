# Publishing Guide

This guide covers how to publish the Frostpane library to npm and deploy the example site to GitHub Pages.

## Prerequisites

- [ ] You have npm account and are logged in (`npm login`)
- [ ] You have write access to the GitHub repository
- [ ] All tests pass (`npm run build`)
- [ ] CHANGELOG.md is updated with the new version
- [ ] Version number is updated in package.json

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
tar -xvzf frostpane-core-*.tgz
ls -la package/
```

### 3. Publish to npm

```bash
# Still in packages/frostpane directory
npm publish --access public

# Or for a beta release
npm publish --access public --tag beta
```

### 4. Verify the Publication

```bash
# Check on npm
npm view @frostpane/core

# Test installation
mkdir test-install
cd test-install
npm init -y
npm install @frostpane/core
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

## Version Bumping

### Patch Release (1.0.0 → 1.0.1)

```bash
cd packages/frostpane
npm version patch
```

### Minor Release (1.0.0 → 1.1.0)

```bash
cd packages/frostpane
npm version minor
```

### Major Release (1.0.0 → 2.0.0)

```bash
cd packages/frostpane
npm version major
```

After bumping version:

1. Update CHANGELOG.md
2. Commit changes
3. Follow publishing steps above

## Troubleshooting

### npm publish fails with 403

- Ensure you're logged in: `npm whoami`
- Check package name isn't taken: `npm view @frostpane/core`
- Verify you have publish rights

### GitHub Pages not updating

- Check Actions tab for errors
- Verify Pages is enabled in Settings
- Ensure workflow has proper permissions
- Check astro.config.mjs has correct base path

### Build fails

- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Try building each package separately

## Checklist Before Publishing

- [ ] All changes committed and pushed
- [ ] Version bumped in package.json
- [ ] CHANGELOG.md updated
- [ ] README.md updated (if needed)
- [ ] Build passes: `npm run build`
- [ ] Dry run successful: `npm publish --dry-run`
- [ ] Git tag created
- [ ] npm published
- [ ] GitHub release created
- [ ] GitHub Pages deployed
- [ ] Verified installation works
