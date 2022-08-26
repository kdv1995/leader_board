/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Heading/Heading.module.scss';

export const Heading = ({ name, highlighted, title }) => (
  <div className={styles.heading__container}>
    <span className={styles.heading__name}>{name}</span>
    <span className={styles.heading__highlighted}>{highlighted}</span>
    <span className={styles.heading__title}>{title}</span>
  </div>
);

Heading.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  highlighted: PropTypes.number,
};
