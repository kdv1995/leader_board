/* eslint-disable react/require-default-props */
/* eslint-disable no-self-compare */
/* eslint-disable max-len */
import edit from 'assets/icons/edit.svg';
import profilePhoto from 'assets/persons/mark.svg';
import styles from 'components/UserRow/UserRow.module.scss';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { EditUser } from 'components/EditUser';

export const UserRow = ({ id, name, score, difference, index, previousPosition }) => {
  const [editScoreActive, setEditScoreActive] = useState(false);

  const onHandleEditScoreActive = () => {
    setEditScoreActive(true);
  };

  return (
    <tr className={styles.user__container}>
      <td className={styles.user__rank}>{index + 1}</td>
      <td>
        <img src={profilePhoto} alt="mark" />
      </td>
      <td className={styles.user__score}>{score}</td>
      <td className={styles.user__name}>{name}</td>
      {difference === 'No change' && <td className={styles.user__difference}>{difference}</td>}
      {difference === 0 && <td className={styles.user__difference}>No change</td>}
      {difference === 'New user' && <td className={styles.user__difference_new}>{difference}</td>}
      {difference === 1 && <td className={styles.user__difference_up}>{`${difference} place`}</td>}
      {difference === -1 && (
        <td className={styles.user__difference_down}>{`${difference} place`}</td>
      )}
      {difference > 1 && <td className={styles.user__difference_up}>{`${difference} places`}</td>}
      {difference < -1 && (
        <td className={styles.user__difference_down}>{`${difference} places`}</td>
      )}
      <td>
        <button type="button" onClick={onHandleEditScoreActive}>
          <img src={edit} alt="edit" />
        </button>
      </td>
      {editScoreActive && (
        <EditUser
          setActive={setEditScoreActive}
          id={id}
          previousPosition={previousPosition}
          name={name}
          score={score}
        />
      )}
    </tr>
  );
};

UserRow.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  difference: PropTypes.string,
  previousPosition: PropTypes.number,
};
