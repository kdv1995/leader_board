import styles from 'components/EditUser/EditUser.module.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { useDispatch } from 'react-redux';
import { setEditUserScore } from 'store/leadersSlice/leadersSlice';
import close from 'assets/icons/close.svg';

export const EditUser = ({ id, setActive }) => {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState({
    name: '',
    score: '',
    id: id,
  });
  const onHandleEditScore = (event, key) => {
    setEditUser((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const onHandleFormData = () => {
    dispatch(setEditUserScore(editUser));
    setActive(false);
  };
  const onHandleEditScoreClose = () => {
    setActive(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <form className={styles.editUser__form}>
          <Heading title="Edit score" color="#000" />
          <button
            className={styles.editUser__button}
            type="button"
            onClick={onHandleEditScoreClose}>
            <img src={close} alt="close" />
          </button>
          <label className={styles.editUser__label} htmlFor="name">
            <input
              className={styles.editUser__input}
              type="text"
              value={editUser.name}
              name="name"
              placeholder="Name"
              onChange={(event) => onHandleEditScore(event, 'name')}
            />
          </label>
          <label className={styles.editUser__label} htmlFor="points">
            <input
              className={styles.editUser__input}
              type="number"
              value={editUser.score}
              score="score"
              placeholder="Points"
              onChange={(event) => onHandleEditScore(event, 'score')}
            />
          </label>
          <Button
            title="Save"
            onClick={onHandleFormData}
            padding="6px 24px"
            bckgColor="#F99746"
            color="#000"
          />
        </form>
      </div>
    </div>
  );
};

EditUser.propTypes = {
  id: PropTypes.string,
  setActive: PropTypes.func,
};
EditUser.defaultProps = {
  id: PropTypes.string,
  setActive: PropTypes.func,
};
