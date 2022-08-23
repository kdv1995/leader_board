import React from 'react';
import { nanoid } from 'nanoid';
import { UserRow } from 'components';
import { useSelector } from 'react-redux';
import { dataSelector } from 'store/selector/dataSelector';
import styles from 'pages/LeaderTable/TableBody/TableBody.module.scss';

export const TableBody = () => {
  const leadersList = useSelector(dataSelector);
  return (
    <table className={styles.table__body}>
      <tbody>
        {leadersList.map(({ name, score, id, difference }, index) => (
          <UserRow
            key={nanoid()}
            id={id}
            score={score}
            name={name}
            difference={difference}
            index={index}
            previousPosition={index}
          />
        ))}
      </tbody>
    </table>
  );
};
