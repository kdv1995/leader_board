import { UserRow } from "components";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynchrononousRequest } from "store/actions/setData";
import { dataSelector } from "store/selector/dataSelector";

export const LeaderTable = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynchrononousRequest());
  }, []);
  return (
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
  );
};
