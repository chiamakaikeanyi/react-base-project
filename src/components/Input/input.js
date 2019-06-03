import React from 'react';
import PropTypes from 'prop-types';
import {composeClasses} from '../../libs/utils';
import styles from './input.module.scss';

const Input = ({className, error, inputStyle, label, labelStyle, labelIcon, name, placeholder, type}) => {
    return (
        <div className={composeClasses(inputStyle || styles.inputWrapper, error && styles.errorState)}>
            <input
                id={name}
                className={composeClasses(styles.inputField, className)}
                name={name}
                placeholder={placeholder || ' '}
                type={type}
            />
            <label
                className={composeClasses(styles.inputLabel, labelStyle)}
                htmlFor={name}
            >
                {label || ''}
                {labelIcon || ''}
            </label>
        </div>
    );
};

Input.defaultProps = {
    inputStyle: '',
    labelStyle: '',
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    inputStyle: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelIcon:  PropTypes.string.isRequired,
    labelStyle: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Input;