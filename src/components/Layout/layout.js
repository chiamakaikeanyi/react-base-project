import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import Navigation from "components/Navigation";
import Seo from 'components/Seo';
import config from "config";
import styles from './layout.module.scss';

const { appName, navItems, } = config;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Navigation navItems={navItems} appName={appName} />
      <main className={styles.siteBody}>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;