import React from "react";
import styles from "components/Modal/Modal.module.scss";

export const Modal = () => {
  return (
    <div className={styles.modal}>
      <h3 className={styles.modal__title}>Edit user score</h3>
      <label htmlFor="name">
        <input type="text" placeholder="Name" />
      </label>
      <label htmlFor="points">
        <input type="number" placeholder="Points" />
      </label>
    </div>
  );
};
