import close from 'assets/icons/close.svg';
import styles from 'components/AddUser/AddUser.module.scss';
import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLeader } from 'store/actions/fetchLeaders';
import { setAddNewUser } from 'store/leadersSlice/leadersSlice';

export const AddUser = ({ setUserActive }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    score: 0,
    id: nanoid(),
  });
  const onHandleNewUser = (event, key) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const onHandleSendNewUser = () => {
    dispatch(setAddNewUser(user));
    setUserActive(false);
    dispatch(postLeader(user));
  };
  const onHandleNewUserClose = () => {
    setUserActive(false);
  };
  return (
    <div className={styles.user}>
      <div className={styles.user__content}>
        <form className={styles.addUser__form}>
          <Heading title="Add new user" color="#000" />
          <button className={styles.addUser__button} type="button" onClick={onHandleNewUserClose}>
            <img src={close} alt="close" />
          </button>
          <label htmlFor="name" className={styles.addUser__label}>
            <input
              className={styles.addUser__input}
              type="text"
              value={user.name}
              name="name"
              placeholder="Name"
              onChange={(event) => onHandleNewUser(event, 'name')}
            />
          </label>
          <label htmlFor="points" className={styles.addUser__label}>
            <input
              className={styles.addUser__input}
              type="number"
              value={user.score}
              score="score"
              placeholder="Points"
              onChange={(event) => onHandleNewUser(event, 'score')}
            />
          </label>
          <Button title="Save" onClick={onHandleSendNewUser} bckgColor="#F99746" color="#000" />
        </form>
      </div>
    </div>
  );
};

AddUser.propTypes = {
  setUserActive: PropTypes.func,
};

AddUser.defaultProps = {
  setUserActive: PropTypes.func,
};
