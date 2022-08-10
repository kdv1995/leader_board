import React, { useState } from "react";
import styles from "components/Modal/Modal.module.scss";
import { Button } from "components/Button";
import PropTypes from "prop-types";
import close from "assets/icons/close.svg";

export const Modal = ({ onClick }) => {
  const [editScore, setEditScore] = useState({
    name: "",
    score: 0,
  });
  const onHandleChange = (event, key) => {
    setEditScore((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <button className={styles.form__close} type="button" onClick={onClick}>
          <img src={close} alt="close" />
        </button>
        <h3 className={styles.form__title}>Edit user score</h3>
        <label className={styles.form__label} htmlFor="name">
          <input
            className={styles.form__input}
            type="text"
            value={editScore.name}
            name="name"
            placeholder="Name"
            onChange={(event) => onHandleChange(event, "name")}
          />
        </label>
        <label className={styles.form__label} htmlFor="points">
          <input
            className={styles.form__input}
            type="number"
            value={editScore.score}
            score="score"
            placeholder="Points"
            onChange={(event) => onHandleChange(event, "score")}
          />
        </label>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button bckgColor="#F99746" color="#000" padding="6px 24px" title="Save" />
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
