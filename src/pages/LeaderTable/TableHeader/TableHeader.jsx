import React, { useState } from 'react';
import { AddUser, Button, HistoryBack, HistoryForward } from 'components';

export const TableHeader = () => {
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  const onHandleGoBack = () => {};
  const onHandleGoForward = () => {};
  return (
    <div className="Table-heading__container">
      <h3 className="Table-heading__title">Leader table for this period</h3>
      <HistoryBack title="&lt;&lt;" goBack={onHandleGoBack} />
      <HistoryForward title="&gt;&gt;" goForward={onHandleGoForward} />
      <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" onClick={onHandleUserActive} />
      {userActive && <AddUser setUserActive={setUserActive} />}
    </div>
  );
};
