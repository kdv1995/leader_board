import React from 'react';
import styles from 'components/HistoryForward/HistoryForward.module.scss';
import PropTypes from 'prop-types';

export const HistoryForward = ({ title, goForward }) => (
  <button type="button" className={styles.history__forward} onClick={goForward}>
    {title}
  </button>
);

HistoryForward.propTypes = {
  title: PropTypes.string,
  goForward: PropTypes.func,
};
HistoryForward.defaultProps = {
  title: PropTypes.string,
  goForward: PropTypes.func,
};
