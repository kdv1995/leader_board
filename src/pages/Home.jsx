import { Button, Header, Heading, Modal, User } from "components";
import { nanoid } from "nanoid";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynchrononousRequest } from "store/actions/setData";
import { dataSelector } from "store/selector/dataSelector";

const Home = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynchrononousRequest());
  }, []);
  return (
    <main>
      <Heading name="Cube" highlighted={19} title="Leaderboard" />
      <Header title="All-time highest scorers" draft="You can be among the leaders already today" />
      <div className="Home__container">
        <div className="Table-heading__container">
          <h3 className="Table-heading__title">Leader table for this period</h3>
          <Button title="<<" />
          <Button title=">>" />
          <Button title="Add new day" />
          <Button title="Add new user" />
        </div>
        <ul>
          {data.map(({ name, score, rank, id }) => (
            <User
              key={nanoid()}
              id={id}
              rank={rank}
              score={score}
              name={name}
              difference="places"
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
