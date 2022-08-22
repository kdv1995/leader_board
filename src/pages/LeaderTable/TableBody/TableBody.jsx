import React from 'react';
import { nanoid } from 'nanoid';
import { UserRow } from 'components';
import { useSelector } from 'react-redux';
import { dataSelector } from 'store/selector/dataSelector';
import styles from 'pages/LeaderTable/TableBody/TableBody.module.scss';

export const TableBody = () => {
  const data = useSelector(dataSelector);
  return (
    <table className={styles.table__body}>
      <tbody>
        {data.map(({ name, score, id }, index) => (
          <UserRow
            key={nanoid()}
            id={id}
            score={score}
            name={name}
            difference="places"
            index={index}
          />
        ))}
      </tbody>
    </table>
  );
};
