module.exports = {
  siteMetadata: {
    title: `Clemson University Theta Tau Rush`,
    description: `Clemson University's Theta Tau rush information website. Theta Tau is a professional, co-ed fraternity for all engineering and most computing disciplines.`,
    viewport: `width=device-width, initial-scale=1.0`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};