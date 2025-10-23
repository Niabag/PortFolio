import { readdirSync, copyFileSync, mkdirSync } from 'fs';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = resolve(__dirname, 'blog');

const blogInputs = Object.fromEntries(
  readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
    .map((entry) => {
      const baseName = entry.name.replace(/\.html$/, '');
      const segments = baseName.split(/[-_\s]+/);
      const inputName =
        'blog' +
        segments
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join('');

      return [inputName, resolve(blogDir, entry.name)];
    })
);

// Plugin pour copier sitemap.xml et robots.txt
const copyPublicFiles = () => ({
  name: 'copy-public-files',
  closeBundle: () => {
    const distDir = resolve(__dirname, 'dist');
    const publicDir = resolve(__dirname, 'public');
    
    try {
      mkdirSync(distDir, { recursive: true });
      copyFileSync(join(publicDir, 'sitemap.xml'), join(distDir, 'sitemap.xml'));
      copyFileSync(join(publicDir, 'robots.txt'), join(distDir, 'robots.txt'));
      console.log('✓ sitemap.xml et robots.txt copiés dans dist/');
    } catch (error) {
      console.error('Erreur lors de la copie des fichiers:', error);
    }
  }
});

export default {
  base: '/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq.html'),
        blog: resolve(__dirname, 'blog.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        service: resolve(__dirname, 'service.html'),
        notFound: resolve(__dirname, '404.html'),
        ...blogInputs
      }
    }
  },
  plugins: [react(), copyPublicFiles()]
};
