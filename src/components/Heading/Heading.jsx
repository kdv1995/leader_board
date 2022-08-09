import React from "react";
import PropTypes from "prop-types";
import styles from "components/Heading/Heading.module.scss";

export const Heading = ({ name, highlighted, title }) => {
  return (
    <h1 className={styles.heading}>
      <span className={styles.heading__name}>{name}</span>
      <span className={styles.heading__highlighted}>{highlighted}</span>
      <span className={styles.heading__title}>{title}</span>
    </h1>
  );
};

Heading.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlighted: PropTypes.string.isRequired,
};
