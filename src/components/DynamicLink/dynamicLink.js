import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isExternalUrl, omit, } from 'libs/utils';

/**
 * Renders a Link as either an intenal path or an external url
 * @param {*} props [The component's props]
 * @returns {React.Component} [The Component]
 */

const DynamicLink = (props) => {
    const { url, children, } = props;
    const filteredProps = omit(props, ['url', 'children',]);

    return isExternalUrl(url) ? (
        <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            {...filteredProps}
        >
            {children}
        </a>
    ) : (
        <Link to={url}
              target="_self"
              {...filteredProps}
        >
                {children}
        </Link>
    );
};

DynamicLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default DynamicLink;
