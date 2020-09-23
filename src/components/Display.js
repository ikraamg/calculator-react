import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';

export default function Display({ result }) {
  return (
    <div className="display">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
