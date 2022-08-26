import React from 'react';
import { nanoid } from 'nanoid';
import { UserRow } from 'components';
import { useSelector } from 'react-redux';

import styles from 'pages/LeaderTable/TableBody/TableBody.module.scss';
import { leadersSelector } from 'store/selector/leadersSelector';

export const TableBody = () => {
  const leaders = useSelector(leadersSelector);
  return (
    <table className={styles.table__body}>
      <tbody>
        {leaders.map(({ name, score, id, difference, place }, index) => (
          <UserRow
            key={nanoid()}
            id={id}
            score={score}
            name={name}
            difference={difference}
            index={index}
            previousPosition={place}
          />
        ))}
      </tbody>
    </table>
  );
};
