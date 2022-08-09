import { Header, Heading, Modal } from "components";
import React from "react";

const Home = () => {
  return (
    <>
      <Heading name="Cube" highlighted={19} title="Leaderboard" />
      <Header title="All-time highest scorers" draft="You can be among the leaders already today" />
      {/* <main>
        <Modal />
      </main> */}
    </>
  );
};

export default Home;
