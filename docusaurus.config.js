// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "LFBI";
const projectName = "Documentation";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `LFBI Docs`,
  favicon: 'img/favicon.ico',

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
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
          // editUrl:
          //   `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LFBI',
        logo: {
          alt: 'LFBI Crest Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'intro',
            label: 'Docs'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact Links',
            items: [
              {
                html: 'Technical Support: Email Romeo Bagunu at <a href="mailto:rbagunu@lfbi.org">rbagunu@lfbi.org</a>'
              },
              {
                html: 'Academic Support: Email Hannah Hatton at <a href="mailto:hhatton@lfbi.org">hhatton@lfbi.org</a>'
              },
              {
                html: 'Support Form: <a href="https://www.cognitoforms.com/MBT3/LFBISupportForm">https://www.cognitoforms.com/MBT3/LFBISupportForm</a>'
              },
              {
                html: 'General Contact Inbox: <a href="mailto:contact@lfbi.org">contact@lfbi.org</a>'
              },
            ],
          },
          {
            title: 'LFBI Links',
            items: [
              {
                label: 'MyLFBI',
                href: 'https://mylfbi.org'
              },
              {
                label: 'Courses',
                href: 'https://lfbi.org/courses',
              },
              {
                label: 'Events',
                href: 'https://lfbi.org/courses',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Living Faith Bible Institute. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
