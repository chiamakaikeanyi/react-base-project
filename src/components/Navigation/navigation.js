import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { isMobile, isTablet, } from 'react-device-detect';
import PropTypes from 'prop-types';
import NavItem from '../NavItem';
import Icon from '../Icon';
import constants from '../../config/constants';
import styles from './navigation.module.scss';

const { appName } = constants;

const Navigation = ({ navItems, toggleHandler }) => (
    <Fragment>

        <header className={styles.header}>
            {
                (isMobile || isTablet) &&
                <Icon name="hamburger" onClick={toggleHandler} />
            }
            <Link to='/' className={styles.appNameWrapper}>
                <Icon aria-label={appName} name="logo" />
                {appName}
            </Link>

            <nav>
                <ul>
                    {
                        navItems.map((item, id) => (
                            <NavItem
                                key={id}
                                url={item.link}
                            >
                                {item.name}
                            </NavItem>)
                        )
                    }
                </ul>
            </nav>
        </header>
    </Fragment>
);



Navigation.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Navigation;
