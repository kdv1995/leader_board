import { Button, Header, Heading } from "components";

import React from "react";
import { LeaderTable } from "./LeaderTable";

export const HomePage = () => {
  return (
    <main>
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
      </div>
      <LeaderTable />
    </main>
  );
};
