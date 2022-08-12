import React, { useState } from "react";
import edit from "assets/icons/edit.svg";
import PropTypes from "prop-types";
import styles from "components/User/User.module.scss";
import profilePhoto from "assets/persons/mark.svg";
import { Modal } from "components/Modal";

export const User = ({ id, rank, name, score, difference }) => {
  const [modal, setModal] = useState(false);
  const onHanldeModalOpen = () => {
    setModal(true);
  };
  const onHandleModalClose = () => {
    setModal(false);
  };
  return (
    <li className={styles.user__container}>
      <span className={styles.user__rank}>{rank}</span>
      <img src={profilePhoto} alt="mark" />
      <span className={styles.user__score}>{score}</span>
      <span className={styles.user__name}>{name}</span>
      <span className={styles.user__difference}>{difference}</span>
      <button type="button" onClick={onHanldeModalOpen}>
        <img src={edit} alt="edit" />
      </button>
      {modal && <Modal id={id} onHandleModalClose={onHandleModalClose} />}
    </li>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  difference: PropTypes.string.isRequired,
};
