import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Footer from '../Footer';
import Navigation from "../Navigation";
import Seo from '../Seo';
import constant from "../../config/constants";
import styles from './layout.module.scss';

const { appName, navItems, } = constant;

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