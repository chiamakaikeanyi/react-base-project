import React from 'react';
import constants from '../../config/constants';
import styles from './footer.module.scss';

const { author, gitHub, website, } = constants;

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}
    <span className={styles.middot}></span>
    <a href={website}
      rel="noopener noreferrer"
      target="_blank"
    >
      {author}
    </a>
    <span className={styles.middot}></span>
    <a href={gitHub}
      rel="noopener noreferrer"
      target="_blank"
    >
      View on Github
      </a>
  </footer>
)

export default Footer;