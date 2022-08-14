import React from "react";
import PropTypes from "prop-types";
import styles from "components/Heading/Heading.module.scss";

export const Heading = ({ title }) => {
  return <h1 className={styles.heading}>{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
};
Heading.defaultProps = {
  title: PropTypes.string,
};
