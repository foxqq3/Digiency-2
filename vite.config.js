import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: {
        navigationItems: [
          { title: 'Home', href: '/' },
          { title: 'About Us', href: '/' },
          { title: 'Our Work', href: '/' },
          { title: 'Clients', href: '/' },
          { title: 'Our Blog', href: '/' },
          { title: 'Contact Us', href: '/' },
        ],
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
