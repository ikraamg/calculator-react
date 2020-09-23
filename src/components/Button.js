import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button({
  name, color, wide, clickHandler,
}) {
  return (
    <button type="button" onClick={() => clickHandler(name)} className={`button ${wide ? 'wide' : ''} ${color || ''}`}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,

};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};
