/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
import { Header, Heading } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "store/initiaData/initialDataSlice";
import { dataSelector } from "store/selector/dataSelector";

const Home = () => {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [data]);

  return (
    <>
      <Heading name="Cube" highlighted={19} title="Leaderboard" />
      <Header title="All-time highest scorers" draft="You can be among the leaders already today" />
      <div>
        {data.map((item) => (
          <>
            <div>{item.name}</div>
            <div>{item.score}</div>
          </>
        ))}
      </div>
      {/* <main>
        <Modal />
      </main> */}
    </>
  );
};

export default Home;
