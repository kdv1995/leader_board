import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "components/Button";
import { nanoid } from "nanoid";
import { setAddNewUser } from "store/leadersSlice/leadersSlice";
import styles from "components/AddUser/AddUser.module.scss";

export const AddUser = ({ setUserActive }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    score: "",
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
  };
  return (
    <div className={styles.user}>
      <div className={styles.user__content}>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              value={user.name}
              name="name"
              placeholder="Name"
              onChange={(event) => onHandleNewUser(event, "name")}
            />
          </label>
          <label htmlFor="points">
            <input
              type="number"
              value={user.score}
              score="score"
              placeholder="Points"
              onChange={(event) => onHandleNewUser(event, "score")}
            />
          </label>
          <Button title="Add user" onClick={onHandleSendNewUser} />
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
