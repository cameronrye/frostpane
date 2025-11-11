import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output directory for built files
  outDir: './dist',
  
  // Public directory for static assets
  publicDir: './public',
  
  // Source directory
  srcDir: './src',
  
  // Build configuration
  build: {
    // Assets directory within dist
    assets: 'assets'
  },
  
  // Development server configuration
  server: {
    port: 5173,
    host: true
  },
  
  // Vite configuration for compatibility
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Additional SCSS options if needed
        }
      }
    }
  }
});

