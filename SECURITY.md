# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within Frostpane, please send an email to Cameron Rye at c@meron.io. All security vulnerabilities will be promptly addressed.

Please include the following information in your report:

- Type of vulnerability
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## What to Expect

- You will receive a response within 48 hours acknowledging your report
- We will investigate and keep you informed of our progress
- Once the vulnerability is confirmed, we will work on a fix
- We will release a security advisory and credit you for the discovery (unless you prefer to remain anonymous)

## Disclosure Policy

- Please do not publicly disclose the vulnerability until we have had a chance to address it
- We aim to resolve critical vulnerabilities within 7 days
- We will coordinate with you on the disclosure timeline

Thank you for helping keep Frostpane and its users safe!

## Security Best Practices

### Content Security Policy (CSP)

When using Frostpane in your application, we recommend implementing a Content Security Policy. Here's a recommended CSP configuration:

```
Content-Security-Policy:
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
```

**Note:** The `'unsafe-inline'` directive for `style-src` is required for CSS custom properties to work properly. If you're using a build process that extracts CSS, you may be able to remove this directive.

### Subresource Integrity (SRI)

If you're loading Frostpane from a CDN, always use Subresource Integrity:

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/frostpane.css"
  integrity="sha384-..."
  crossorigin="anonymous"
/>
```

### Supply Chain Security

We provide Software Bill of Materials (SBOM) for transparency:

```bash
# Generate SBOM in JSON format
npm run sbom

# Generate SBOM in XML format
npm run sbom:xml
```

### Dependency Management

- We use Dependabot to keep dependencies up to date
- All dependencies are regularly audited for vulnerabilities
- We follow semantic versioning for predictable updates

### Security Scanning

Our CI/CD pipeline includes:

- Automated dependency vulnerability scanning
- Code quality checks
- Build verification
- Automated testing
