import React from 'react';
import PropTypes from 'prop-types';


const Select = ({ values, callback, disabled = false, readonly = false, selected }) => {
  return (
    <select
      disabled={disabled}
      readOnly={readonly}
      onBlur={({ target: { value } }) => callback(value)}
    >
      {values.map((value) => <option selected={selected === value} value={value}>{value}</option>)}
    </select>
  );
}

Select.defaultProps = {
  disabled: false,
  readonly: false,
  selected: false,
};

Select.propTypes = {
  values: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  readonly: PropTypes.string,
  selected: PropTypes.string,
};

export default Select;