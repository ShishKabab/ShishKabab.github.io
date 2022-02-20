import * as path from 'path'

module.exports = {
    siteMetadata: {
        title: `Vincent den Boer`,
        description: `Thoughts on software development, collective intelligence, workflow improvement education and other topics related to systemic change`,
        author: `@vince_d_boer`,
    },
    plugins: [
        `gatsby-remark-images`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/../src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/../src/pages`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: path.resolve(__dirname, '../src/components/layout-markdown.tsx')
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `vincent-den-boer`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
