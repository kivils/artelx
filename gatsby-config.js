// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: 'gatsby-site', // Subfolder on the hosting
  siteMetadata: {
    title: `Артеликс`,
    subtitle: `Интернет-маркетинг для малого бизнеса`,
    email: `mail@artelx.ru`,
    phone: `+7(953) 163 2748`,
    telegram: `https://t.me/artelxru`,
    viber: `viber://chat?number=%2B79531632748`,
    whatsup: `https://wa.me/79531632748`,
    vkontakte: `https://vk.com/artelx`,
    description: `Интернет-маркетинг для малого бизнеса`,
    author: `artelx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variable: false,
            weights: ['300', '400','700','900']
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artelx`,
        short_name: `Artelx`,
        start_url: `/`,
        background_color: `#A7E5E0`,
        theme_color: `#A7E5E0`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
