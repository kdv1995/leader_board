/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from "components/EditScore/EditScore.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { Button } from "components/Button";
import { useDispatch } from "react-redux";
import { setEditUserScore } from "store/leadersSlice/leadersSlice";

export const EditScore = ({ id, setActive }) => {
  const dispatch = useDispatch();
  const [editScore, setEditScore] = useState({
    name: "",
    score: "",
    id: id,
  });
  const onHandleEditScore = (event, key) => {
    setEditScore((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const onHandleFormData = () => {
    dispatch(setEditUserScore(editScore));
    setActive(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <form className={styles.form}>
          <label className={styles.form__label} htmlFor="name">
            <input
              className={styles.form__input}
              type="text"
              value={editScore.name}
              name="name"
              placeholder="Name"
              onChange={(event) => onHandleEditScore(event, "name")}
            />
          </label>
          <label className={styles.form__label} htmlFor="points">
            <input
              className={styles.form__input}
              type="number"
              value={editScore.score}
              score="score"
              placeholder="Points"
              onChange={(event) => onHandleEditScore(event, "score")}
            />
          </label>
          <Button title="Save" onClick={onHandleFormData} />
        </form>
      </div>
    </div>
  );
};

EditScore.propTypes = {
  id: PropTypes.string,

  setActive: PropTypes.func,
};
EditScore.defaultProps = {
  id: PropTypes.string,
  setActive: PropTypes.func,
};
