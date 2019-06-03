import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navItem.module.scss';

const NavItem = ({ url, children, activeClassName, className }) => (
    <li>
        <NavLink
            activeClassName={activeClassName || styles.navItemActive}
            className={className || styles.navItem}
            to={url}
        >
            {children}
        </NavLink>

    </li>
);

NavItem.defaultProps = {
    activeClassName: '',
    className: '',
};

NavItem.propTypes = {
    activeClassName: PropTypes.string,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
};

export default NavItem;