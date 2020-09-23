import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';

export default function Display({ total, next, operation }) {
  return (
    <div className="display">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
