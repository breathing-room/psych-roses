/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="relative min-h-screen flex-col bg-space">
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div className="flex-col flex-1">
        <main className="flex-col mx-auto content-center text-center p-2">{children}</main>
      </div>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
