import React from 'react';

import Layout from 'components/Layout';
import config from 'config';
import styles from './about.module.scss';

const { authorBio } = config;

const About = () => {
  return (
    <Layout>
      <section className={styles.aboutWrapper}>
        {authorBio}
      </section>
    </Layout>
  )
}

export default About
