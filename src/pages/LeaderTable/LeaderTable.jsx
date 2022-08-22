import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchLeaders, postLeader } from 'store/actions/fetchLeaders';

import { TableHeader } from 'pages/LeaderTable/TableHeader/TableHeader';
import { TableBody } from 'pages/LeaderTable/TableBody/TableBody';

export const LeaderTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postLeader());
    dispatch(fetchLeaders());
  }, []);
  return (
    <div className="Home__container">
      <TableHeader />
      <TableBody />
    </div>
  );
};
