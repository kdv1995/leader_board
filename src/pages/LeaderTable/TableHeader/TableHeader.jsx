import React, { useState } from 'react';
import { AddUser, Button } from 'components';

// import styles from 'pages/LeaderTable/TableHeader/TableHeader.module.scss';

export const TableHeader = () => {
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  return (
    <div className="Table-heading__container">
      <h3 className="Table-heading__title">Leader table for this period</h3>
      <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" onClick={onHandleUserActive} />
      {userActive && <AddUser setUserActive={setUserActive} />}
    </div>
  );
};
