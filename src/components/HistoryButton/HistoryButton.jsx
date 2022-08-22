import React from 'react';
import styles from 'components/HistoryButton/HistoryButton.module.scss';
import PropTypes from 'prop-types';

export const HistoryButton = ({ title }) => (
  <button type="button" className={styles.history__button}>
    {title}
  </button>
);

HistoryButton.propTypes = {
  title: PropTypes.string,
};
HistoryButton.defaultProps = {
  title: PropTypes.string,
};
