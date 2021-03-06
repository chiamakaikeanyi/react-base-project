import React from 'react';

/**
 * Hamburger
 * @param props
 * @returns {*}
 * @constructor
 */
const SVG = (props) => (
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"
         {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H20V2.14286H0V0ZM0 6.42857H20V8.57143H0V6.42857ZM20 12.8571H0V15H20V12.8571Z" fill="white"/>
    </svg>
);

export default SVG;

