/* eslint-disable operator-linebreak */
import React, { useState, useMemo } from 'react';
import { AddUser, Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { historySelector } from 'store/selector/historySelector';
import { historyStepSelector } from 'store/selector/historyStepSelector';
import { setNextHistoryStep, setPreviousHistoryStep } from 'store/leadersSlice/leadersSlice';

import styles from 'pages/LeaderTable/TableHeader/TableHeader.module.scss';

export const TableHeader = () => {
  const dispatch = useDispatch();
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  const history = useSelector(historySelector);
  const historyStep = useSelector(historyStepSelector);
  const disablePrev = useMemo(() => {
    if (historyStep === 1) {
      return true;
    }
    return false;
  }, [historyStep]);
  const disableNext = useMemo(() => {
    if (
      Object.keys(history).length === 1 ||
      (historyStep === Object.keys(history).length && historyStep > 1)
    ) {
      return true;
    }
    return false;
  }, [history, historyStep]);
  const changeHistoryBack = () => {
    dispatch(setPreviousHistoryStep());
  };
  const changeHistoryForward = () => {
    dispatch(setNextHistoryStep());
  };
  return (
    <div className="Table-heading__container">
      <h3 className="Table-heading__title">Leader table for this period</h3>
      <button
        className={styles.button__back}
        type="button"
        disabled={disablePrev}
        onClick={() => changeHistoryBack()}>
        Previous
      </button>
      <button
        className={styles.button__forward}
        type="button"
        disabled={disableNext}
        onClick={() => changeHistoryForward()}>
        Next
      </button>
      <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" onClick={onHandleUserActive} />
      {userActive && <AddUser setUserActive={setUserActive} />}
    </div>
  );
};
