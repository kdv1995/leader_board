import edit from "assets/icons/edit.svg";
import profilePhoto from "assets/persons/mark.svg";
import styles from "components/UserRow/UserRow.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { EditScore } from "components/EditScore";

export const UserRow = ({ id, name, score, difference, index }) => {
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
      <td className={styles.user__difference}>{difference}</td>
      <td>
        <button type="button" onClick={onHandleEditScoreActive}>
          <img src={edit} alt="edit" />
        </button>
      </td>
      {editScoreActive && <EditScore setActive={onHandleEditScoreActive} id={id} />}
    </tr>
  );
};

UserRow.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  difference: PropTypes.string,
};

UserRow.defaultProps = {
  index: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
  difference: PropTypes.string,
};
