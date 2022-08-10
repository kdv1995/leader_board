import { Button, Header, Heading, User } from "components";
import { fetchData } from "functions/fetchData";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "store/selector/dataSelector";

const Home = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [data]);
  return (
    <>
      <Heading name="Cube" highlighted={19} title="Leaderboard" />
      <Header title="All-time highest scorers" draft="You can be among the leaders already today" />
      <div className="Home__container">
        <div className="Table-heading__container">
          <h3 className="Table-heading__title">Leader table for this period</h3>
          <Button title="<<" />
          <Button title=">>" />
          <Button title="Add new day" bckgColor="#F99746" color="#fff" padding="6px 24px" />
          <Button title="Add new user" bckgColor="#1E3CA9" color="#fff" padding="6px 24px" />
        </div>
        <ul>
          {data.map(({ name, score, rank }) => (
            <User rank={rank} score={score} name={name} difference="places" />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
