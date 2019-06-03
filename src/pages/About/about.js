import React from 'react';

import Layout from '../../components/Layout';
import constant from '../../config/constants';
import styles from './about.module.scss';

const { authorBio } = constant;

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
