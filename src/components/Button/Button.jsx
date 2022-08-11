import React from "react";
import PropTypes from "prop-types";
import styles from "components/Button/Button.module.scss";

export const Button = ({ title, onClick }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
