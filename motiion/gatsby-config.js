module.exports = {
  siteMetadata: {
    title: 'Motiion',
    contentful: {
      space: 'j364uols58ro',
      accessToken: '38ae71b3396e5e26dca9fb6b09893ffee94900760d29422658530c84d5fef339',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
