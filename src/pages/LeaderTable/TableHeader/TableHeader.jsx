import React, { useState } from 'react';
import { AddUser, Button } from 'components';
import { useSelector } from 'react-redux';
import { historySelector } from 'store/selector/historySelector';
import styles from 'pages/LeaderTable/TableHeader/TableHeader.module.scss';
import { useLocation } from 'react-router-dom';

export const TableHeader = () => {
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  const history = useSelector(historySelector);
  return (
    <div className="Table-heading__container">
      <h3 className="Table-heading__title">Leader table for this period</h3>
      <button className={styles.button__back} type="button" disabled>
        Back
      </button>
      <button className={styles.button__back} type="button" disabled>
        Forward
      </button>
      <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" onClick={onHandleUserActive} />
      {userActive && <AddUser setUserActive={setUserActive} />}
    </div>
  );
};
