import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import constants from '../../config/constants';

const {
  appName,
  seoData: {
    description,
    image,
    keywords,
  },
  socialHandle,
} = constants;

/**
 * @param {Object} props Component Props
 * @returns {React.Component} MetaComponent
 */
const Seo = () => (
  <Fragment>
    {/* Base */}
    <meta
      content="ie=edge"
      httpEquiv="x-ua-compatible"
    />

    <meta
      content={description}
      name="description"
    />
    <meta
      content={keywords}
      name="keywords"
    />

    {/* Twitter Card */}
    <meta
      content="summary_large_image"
      name="twitter:card"
    />
    <meta
      content={socialHandle}
      name="twitter:site"
    />
    <meta
      content={appName}
      name="twitter:title"
    />
    <meta
      content={description}
      name="twitter:description"
    />
    <meta
      content={image}
      name="twitter:image"
    />
    <meta
      content={appName}
      name="twitter:image:alt"
    />

    {/* Facebook Open Graph */}
    <meta
      content="website"
      property="og:type"
    />
    <meta
      content="en-US"
      property="og:locale"
    />
    <meta
      content="image/png"
      property="og:image:type"
    />
    <meta
      content="400"
      property="og:image:height"
    />
    <meta
      content="600"
      property="og:image:width"
    />
    <meta
      content={window.location.url}
      property="og:url"
    />
    <meta
      content={appName}
      property="og:title"
    />
    <meta
      content={description}
      property="og:description"
    />
    <meta
      content={image}
      property="og:image"
    />
    <meta
      content={appName}
      property="og:image:alt"
    />
  </Fragment>
);

Seo.defaultProps = {
  appName: '',
  description: '',
  image: '',
  keywords: '',
  socialHandle: '',
};

Seo.propTypes = {
  appName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  socialHandle: PropTypes.string,
};

export default Seo;