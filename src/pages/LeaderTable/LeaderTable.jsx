import { UserRow, Button } from "components";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynchrononousRequest } from "store/actions/setData";
import { setAddNewUser } from "store/leadersSlice/leadersSlice";
import { dataSelector } from "store/selector/dataSelector";

export const LeaderTable = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    score: "",
    id: nanoid(),
  });
  useEffect(() => {
    dispatch(asynchrononousRequest());
  }, []);
  const onHandleNewUserData = (event, key) => {
    setNewUser((prevState) => ({
      ...prevState,
      [key]: event.target.value,
    }));
  };
  const addNewUser = () => {
    dispatch(setAddNewUser(newUser));
  };
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
            onClick={addNewUser}
          />
          <form style={{ position: "absolute", top: "50%", left: "50%" }}>
            <label htmlFor="name">
              <input
                type="text"
                value={newUser.name}
                name="name"
                onChange={(event) => onHandleNewUserData(event, "name")}
              />
            </label>
            <label htmlFor="points">
              <input
                type="number"
                score="score"
                value={newUser.score}
                onChange={(event) => onHandleNewUserData(event, "score")}
              />
            </label>
            <button type="button" onClick={addNewUser}>
              Add user
            </button>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
