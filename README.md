# Static site for ArtelX built with Gatsby and Wordpress

## Features

- **react** for building frontend
- **css-modules** for styling
- **post-css**

## Requirements

- [NodeJs](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)
- [Gatsby](https://www.gatsbyjs.com)
    - Gatsby-cli
- [WordPress](https://wordpress.com)

## Development

- ``yarn``
to install dependencies


- ``gatsby develop``
to start development:

http://localhost:8000 - site with hot-reload

http://localhost:8000/___graphql - Endpoint to wordpress graphql. 
 [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql).

- ``gatsby build``

## Settings and gatsby API usage:

-  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

-  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

-  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

-  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
