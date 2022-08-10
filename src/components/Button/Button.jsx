import React from "react";
import PropTypes from "prop-types";

export const Button = ({ title, bckgColor, onClick }) => {
  return (
    <button type="button" onClick={onClick} style={{ backgroundColor: bckgColor }}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  bckgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
