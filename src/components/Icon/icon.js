import React from 'react';
import PropTypes from 'prop-types';
import {omit} from '../../libs/utils'

/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @returns {React.Component} Icon component
 */
const Icon = (props) => {
    const propsToOmit = ['name', ];
    const filteredProps = omit(props, propsToOmit);

    if (props.name === '') {
        return null;
    }

    try {
        const Image = require(`../../images/svgs/${props.name}`).default;

        if (Image) {
            return (
                <Image
                    {...filteredProps}
                />
            );
        }
        return null;
    }
    catch (error) {
        console.error('Icon not found', error);
        return null;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
