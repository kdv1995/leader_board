import { UserRow, Button, AddUser } from "components";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynchrononousRequest } from "store/actions/setData";

import { dataSelector } from "store/selector/dataSelector";

export const LeaderTable = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [userActive, setUserActive] = useState(false);
  const onHandleUserActive = () => {
    setUserActive(true);
  };
  useEffect(() => {
    dispatch(asynchrononousRequest());
  }, []);
  return (
    <>
      <div className="Home__container">
        <div className="Table-heading__container">
          <h3 className="Table-heading__title">Leader table for this period</h3>
          <Button title="<<" color="" bckgColor="" padding="" />
          <Button title=">>" color="" bckgColor="" padding="" />
          <Button title="Add new day" bckgColor="#F99746" color="#fff" padding="6px 24px" />
          <Button
            title="Add new user"
            bckgColor="#1E3CA9"
            color="#fff"
            padding="6px 24px"
            onClick={onHandleUserActive}
          />
          {userActive && <AddUser setUserActive={setUserActive} />}
        </div>
      </div>
      <div>
        <table style={{ width: "714px" }}>
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
    </>
  );
};
