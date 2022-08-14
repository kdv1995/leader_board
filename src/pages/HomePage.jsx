import { Header, Heading } from "components";

import { LeaderTable } from "pages/LeaderTable";
import React from "react";

export const HomePage = () => {
  return (
    <main>
      <Heading name="Cube" highlighted={19} title="Leaderboard" />
      <Header title="All-time highest scorers" draft="You can be among the leaders already today" />
      <LeaderTable />
    </main>
  );
};
