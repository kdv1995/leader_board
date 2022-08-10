import React from "react";
import edit from "assets/icons/edit.svg";
import PropTypes from "prop-types";
import styles from "components/User/User.module.scss";
import profilePhoto from "assets/persons/mark.svg";

export const User = ({ rank, name, score, difference, onClick }) => {
  return (
    <li className={styles.user__container}>
      <span className={styles.user__rank}>{rank}</span>
      <img src={profilePhoto} alt="mark" />
      <span className={styles.user__score}>{score}</span>
      <span className={styles.user__name}>{name}</span>
      <span className={styles.user__difference}>{difference}</span>
      <button type="button" onClick={onClick}>
        <img src={edit} alt="edit" />
      </button>
    </li>
  );
};

User.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  difference: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
