import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button({ name, color, wide }) {
  return (
    <button type="button" className={`button ${wide ? 'wide' : ''} ${color || ''}`}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,

};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};
