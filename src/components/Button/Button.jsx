import React from "react";
import PropTypes from "prop-types";
import styles from "components/Button/Button.module.scss";

export const Button = ({ title, onClick, bckgColor, color, padding }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    style={{ backgroundColor: bckgColor, color: color, padding: padding }}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bckgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
