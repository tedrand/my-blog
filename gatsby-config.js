module.exports = {
  siteMetadata: {
    title: `Ted Rand | Patent Agent`,
    author: {
      name: `Ted Rand`,
      summary: `An incoming Associate of Morgan Lewis's Silicon Valley office, and JavaScript hobbyist.`,
    },
    description: `A personal portfolio and patent law blog.`,
    siteUrl: `https://www.tedrand.com`,
    social: {
      linkedIn: `tedrand`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/static`,
        name: `static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/flashcards`,
        name: `flashcards`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 520,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-emotion`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-106788722-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TedRand.com`,
        short_name: `TRDC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#348064`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `html`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            html: node => node.html,
            path: node => node.fields.slug,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: `UA-106788722-1`,
          // Setting this parameter is optional
          anonymize: true,
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   // The name of the plugin
    //   resolve: 'gatsby-source-mongodb',
    //   options: {
    //     dbName: `sample_training`,
    //     collection: [`companies`],
    //     server: { address: 'my-blog-1-shard-00-02.7tql1.mongodb.net', port: 27017},
    //     auth: { user: 'Trips1133', password: 'Trips1133' },
    //     extraParams: { ssl: true, authSource: `admin`, retryWrites: true }
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about`],
      },
    },
  ],
}
