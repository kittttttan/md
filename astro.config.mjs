// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';

/** @type {import('satteri').HastPluginDefinition} */
const satteriExternalLinksPlugin = {
  name: 'satteri-external-links',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      const href = node.properties?.href;
      if (typeof href === 'string' && (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//'))) {
        ctx.setProperty(node, 'target', '_blank');
        ctx.setProperty(node, 'rel', ['noopener', 'noreferrer']);
        ctx.appendChild(node, { type: 'text', value: '🔗' });
      }
    }
  }
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [],
  markdown: {
    processor: satteri({
      hastPlugins: [satteriExternalLinksPlugin]
    }),
  },
});
