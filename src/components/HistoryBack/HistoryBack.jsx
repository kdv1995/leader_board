import React from 'react';
import styles from 'components/HistoryBack/HistoryBack.module.scss';
import PropTypes from 'prop-types';

export const HistoryBack = ({ title, goBack }) => (
  <button type="button" disabled className={styles.history__button} onClick={goBack}>
    {title}
  </button>
);

HistoryBack.propTypes = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};
HistoryBack.defaultProps = {
  title: PropTypes.string,
  goBack: PropTypes.func,
};
