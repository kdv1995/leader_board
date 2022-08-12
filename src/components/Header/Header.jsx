import React from "react";
import PropTypes from "prop-types";
import styles from "components/Header/Header.module.scss";
import tablebanner from "assets/banner/tablebanner.png";
import { useSelector } from "react-redux";
import { dataSelector } from "store/selector/dataSelector";
import scorer from "assets/topscorers/man.svg";
import { nanoid } from "nanoid";

export const Header = ({ title, draft }) => {
  const data = useSelector(dataSelector);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__topscore}>
          <h3 className={styles.header__title}>{title}</h3>
          <h3 className={styles.header__draft}>{draft}</h3>
          <div style={{ display: "flex" }}>
            {data
              .map(({ name, score }) => (
                <div key={nanoid()}>
                  <div className={styles.header__profile}>
                    <img src={scorer} alt="topscorer" />
                  </div>
                  <span style={{ color: "#fff" }}>{`${name} - ${score}`}</span>
                </div>
              ))
              .slice(0, 4)}
          </div>
        </div>
        <div>
          <picture>
            <img
              className={styles.header__img}
              src={tablebanner}
              width="332"
              height="227"
              alt="tableBanner"
            />
          </picture>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  draft: PropTypes.string,
};

Header.defaultProps = {
  title: PropTypes.string,
  draft: PropTypes.string,
};
