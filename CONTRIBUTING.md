# Contributing to Frostpane

Thank you for your interest in contributing to Frostpane! We welcome contributions from the community.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Browser/environment information
- Screenshots if applicable

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Any implementation ideas you have

### Submitting Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Set up your development environment**
   ```bash
   npm install
   npm run dev
   ```

3. **Make your changes**
   - Edit `packages/frostpane/src/frostpane.scss` or `packages/frostpane/src/frostpane-core.scss` for library changes
   - Test your changes in the example site (runs automatically with `npm run dev`)
   - Follow the existing code style and conventions

4. **Build and test**
   ```bash
   npm run build
   ```

5. **Commit your changes**
   - Use clear, descriptive commit messages
   - Reference any related issues

6. **Push to your fork and submit a pull request**
   ```bash
   git push origin feature/my-feature
   ```

### Pull Request Guidelines

- Keep changes focused and atomic
- Update documentation if needed
- Add examples to the example site if adding new features
- Ensure the build passes (`npm run build`)
- Provide a clear description of the changes

## Development Workflow

### Project Structure

```
frostpane/
├── packages/
│   ├── frostpane/             # frostpane - The publishable library
│   │   ├── src/
│   │   │   ├── frostpane.scss      # Full library file
│   │   │   └── frostpane-core.scss # Core library file (minimal)
│   │   ├── dist/              # Compiled CSS (generated)
│   │   └── package.json
│   └── example/               # Example site (Astro)
│       ├── src/
│       │   ├── pages/
│       │   ├── components/
│       │   └── layouts/
│       └── package.json
└── package.json               # Root workspace configuration
```

### Available Scripts

```bash
# Start development server (example site with hot reload)
npm run dev

# Build all packages
npm run build

# Build library only
npm run build:lib

# Build example site only
npm run build:example

# Preview built example site
npm run preview
```

### Making Changes to the Library

1. Edit `packages/frostpane/src/frostpane.scss` (full version) or `packages/frostpane/src/frostpane-core.scss` (core version)
2. Changes automatically reload in the example site during development
3. Build the library before committing: `npm run build:lib`
4. The compiled CSS will be in `packages/frostpane/dist/` directory

### CSS Custom Properties

When adding new features:
- Use CSS custom properties (variables) for customization
- Follow the `--fp-*` naming convention
- Document new properties in the README
- Add examples to the example site

### Code Style

- Use 2 spaces for indentation
- Follow BEM-like naming for classes (`.glass-container`, `.glass-container--modifier`)
- Add comments for complex sections
- Keep selectors specific but not overly nested

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing to Frostpane, you agree that your contributions will be licensed under the MIT License.

