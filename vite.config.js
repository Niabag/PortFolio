import { readdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

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

export default {
  base: './',
  server: {
    // Middleware pour gérer les rewrites en développement local
    proxy: {},
    // Configuration pour gérer les routes /services/:slug
    fs: {
      strict: false
    }
  },
  preview: {
    proxy: {}
  },
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
  plugins: [
    {
      name: 'rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Rewrite /services/:slug vers /service.html?slug=:slug
          const match = req.url?.match(/^\/services\/([^/?]+)/);
          if (match && match[1]) {
            const slug = match[1];
            req.url = `/service.html?slug=${slug}`;
          }
          next();
        });
      }
    }
  ]
};
