import React from "react";
import PropTypes from "prop-types";
import styles from "components/Button/Button.module.scss";

export const Button = ({ title, onClick, padding, bckgColor, color }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    style={{ backgroundColor: bckgColor, color: color, padding: padding }}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
  bckgColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  padding: PropTypes.string,
  bckgColor: PropTypes.bckgColor,
  title: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
