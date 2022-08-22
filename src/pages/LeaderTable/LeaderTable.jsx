import { AddUser, Button, UserRow } from 'components';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLeaders, postLeader } from 'store/actions/fetchLeaders';

import { dataSelector } from 'store/selector/dataSelector';

export const LeaderTable = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  useEffect(() => {
    dispatch(postLeader());
    dispatch(fetchLeaders());
  }, []);
  return (
    <div className="Home__container">
      <div className="Table-heading__container">
        <h3 className="Table-heading__title">Leader table for this period</h3>
        <Button title="Add new day" bckgColor="#F99746" color="#fff" />
        <Button
          title="Add new user"
          bckgColor="#1E3CA9"
          color="#fff"
          onClick={onHandleUserActive}
        />
        {userActive && <AddUser setUserActive={setUserActive} />}
      </div>
      <table style={{ width: '714px' }}>
        <tbody>
          {data.map(({ name, score, id }, index) => (
            <UserRow
              key={nanoid()}
              id={id}
              score={score}
              name={name}
              difference="places"
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
