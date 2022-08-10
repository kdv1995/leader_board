import { Header, Heading, User } from "components";
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
        {data.map(({ rank, name, score }) => (
          <User rank={rank} score={score} name={name} difference="places" />
        ))}
      </div>
    </>
  );
};

export default Home;
