import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Button/Button.module.scss';

export const Button = ({ title, onClick, bckgColor, color }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    style={{ backgroundColor: bckgColor, color: color }}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bckgColor: PropTypes.string,
};

Button.defaultProps = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bckgColor: PropTypes.string,
};
