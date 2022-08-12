import close from "assets/icons/close.svg";
import { Button } from "components/Button";
import styles from "components/Modal/Modal.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEditUserScore } from "store/leadersSlice/leadersSlice";

export const Modal = ({ onHandleModalClose, id }) => {
  const dispatch = useDispatch();
  const [editScore, setEditScore] = useState({
    name: "",
    score: "",
    id: id,
  });
  const onHandleChange = (event, key) => {
    setEditScore((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const onHandleSendData = () => {
    dispatch(setEditUserScore(editScore));
    onHandleModalClose();
  };
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <button className={styles.form__close} type="button" onClick={onHandleModalClose}>
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
          <Button title="Save" onClick={onHandleSendData} />
        </div>
      </form>
    </div>
  );
};

Modal.propTypes = {
  onHandleModalClose: PropTypes.func,
  id: PropTypes.string,
};
Modal.defaultProps = {
  onHandleModalClose: PropTypes.func,
  id: PropTypes.string,
};
