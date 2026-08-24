import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://stevevillardi.github.io',
  base: '/lmda-composer-vscode-docs',
  integrations: [
    starlight({
      title: 'LMDA Composer (VS Code)',
      description: 'Run and debug LogicMonitor module scripts from VS Code and Cursor.',
      logo: { src: './src/assets/icon128.png', alt: 'LMDA Composer' },
      customCss: ['./src/styles/custom.css'],
      editLink: { baseUrl: 'https://github.com/stevevillardi/lmda-composer-vscode-docs/edit/main/' },
      sidebar: [
        { label: 'Getting Started', items: [
          { label: 'Installation', slug: 'getting-started/installation' },
          { label: 'Quick Start', slug: 'getting-started/quick-start' },
        ]},
        { label: 'Features', items: [{ label: 'Overview', slug: 'features/overview' }] },
        { label: 'Reference', items: [
          { label: 'Settings', slug: 'reference/settings' },
          { label: 'Troubleshooting', slug: 'reference/troubleshooting' },
          { label: 'Related Tools', slug: 'reference/related-tools' },
        ]},
        { label: 'Release Notes', items: [{ label: 'Changelog', slug: 'release-notes/changelog' }] },
      ],
      components: { Hero: './src/components/Hero.astro' },
    }),
  ],
});
