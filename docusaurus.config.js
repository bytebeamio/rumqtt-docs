// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RUMQTT',
  tagline: 'The MQTT ecosystem in Rust',
  url: 'https://rumqtt.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rumqtt_favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/bytebeamio/rumqtt-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RUMQTT',
        logo: {
          alt: 'RUMQTT Logo',
          src: 'img/rumqtt_thumb.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/bytebeamio/rumqtt',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/mpkSqDg',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://bytebeam.io/blog/tag/rumqtt/',
            label: 'Blog',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: '/coc',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/bytebeam/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/bytebeamhq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://bytebeam.io/blog/tag/rumqtt/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bytebeamio/rumqtt',
              },
              {
                label: 'Releases',
                href: 'https://github.com/bytebeamio/rumqtt/releases',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RUMQTT Authors | Documentation Distributed under CC-BY-4.0  | Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
