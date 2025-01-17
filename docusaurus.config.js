// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Salty Simulations Documentation",
    tagline: "",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    plugins: [
        [
            "content-docs",
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            ({
                id: "release-notes",
                path: "release-notes",
                routeBasePath: "release-notes",
                sidebarPath: require.resolve("./sidebars.js"),
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: "Salty Simulations Documentation",
                logo: {
                    alt: "Salty Simulations Logo",
                    src: "/img/salty-shaker.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "introduction",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        to: "/release-notes/latest",
                        position: "left",
                        label: "Release Notes",
                    },
                    {
                        href: "https://github.com/saltysimulations/salty-747",
                        position: "right",
                        className: "navbar-github",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Installation",
                                to: "/docs/installation",
                            },
                            {
                                label: "Beginner's Guide",
                                to: "/docs/category/beginners-guide",
                            },
                            {
                                label: "Guides",
                                to: "/docs/category/guides",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/S4PJDwk",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/Salty_Sim",
                            },
                            {
                                label: "Facebook",
                                href: "https://www.facebook.com/people/Salty-Simulations/100022089045483",
                            },
                        ],
                    },
                    {
                        title: "Other",
                        items: [
                            {
                                html: `
                                    <a href="https://www.vercel.com?utm_source=saltysimulations&utm_campaign=oss" target="_blank" rel="noreferrer noopener">
                                        <img src="/img/vercel.svg" alt="Powered by Vercel" width="200" height="51" />
                                    </a>
                                `,
                            },
                        ],
                    },
                ],
                copyright: `Copyright © 2022 Salty Simulations`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
