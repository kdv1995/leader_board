import React, { useState } from 'react';
import { AddUser, Button, HistoryButton } from 'components';

export const TableHeader = () => {
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  return (
    <div className="Table-heading__container">
      <h3 className="Table-heading__title">Leader table for this period</h3>

      <HistoryButton title="&lt;&lt;" />
      <HistoryButton title="&gt;&gt;" />
      <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" onClick={onHandleUserActive} />
      {userActive && <AddUser setUserActive={setUserActive} />}
    </div>
  );
};
