import edit from "assets/icons/edit.svg";
import profilePhoto from "assets/persons/mark.svg";
import { Modal } from "components/Modal";
import styles from "components/UserRow/UserRow.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";

export const UserRow = ({ id, name, score, difference, index }) => {
  const [modal, setModal] = useState(false);
  const onHanldeModalOpen = () => {
    setModal(true);
  };
  const onHandleModalClose = () => {
    setModal(false);
  };
  return (
    <tr className={styles.user__container}>
      <td className={styles.user__rank}>{index + 1}</td>
      <img src={profilePhoto} alt="mark" />
      <td className={styles.user__score}>{score}</td>
      <td className={styles.user__name}>{name}</td>
      <td className={styles.user__difference}>{difference}</td>
      <button type="button" onClick={onHanldeModalOpen}>
        <img src={edit} alt="edit" />
      </button>
      {modal && <Modal id={id} onHandleModalClose={onHandleModalClose} />}
    </tr>
  );
};

UserRow.propTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  difference: PropTypes.string.isRequired,
};
