"use strict";

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [{
    resolve: "gatsby-plugin-transition-link"
  }, {
    resolve: "gatsby-plugin-scroll-reveal"
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "markdown-pages",
      path: "".concat(__dirname, "/_data")
    }
  }, {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [{
        resolve: "gatsby-remark-prismjs",
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: false,
          noInlineHighlight: false
        }
      }, {
        resolve: 'gatsby-remark-emojis'
      }]
    }
  }, {
    resolve: "gatsby-plugin-prefetch-google-fonts",
    options: {
      fonts: [{
        family: "Nunito",
        variants: ["300", "700", "900", "400"]
      }, {
        family: "Nunito",
        subsets: ["latin"]
      }, {
        family: "Roboto",
        variants: ["400", "500", "700"]
      }, {
        family: "Roboto",
        subsets: ["latin"]
      }]
    }
  }, {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      // The property ID; the tracking code won't be generated without it. replace with yours
      trackingId: "UA-164743872-1",
      head: true
    }
  }, {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Delog GatbsyJS Starter",
      short_name: "Delog",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#381696",
      display: "standalone",
      icon: "src/images/icon.png"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-netlify-cms", 'gatsby-plugin-dark-mode', // siteURL is a must for sitemap generation
  "gatsby-plugin-sitemap", "gatsby-plugin-offline"]
};