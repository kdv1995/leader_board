import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchLeaders } from 'store/actions/fetchLeaders';

import { TableBody } from 'pages/LeaderTable/TableBody/TableBody';
import { TableHeader } from 'pages/LeaderTable/TableHeader/TableHeader';
import { postLeader } from 'store/actions/postLeader';

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
