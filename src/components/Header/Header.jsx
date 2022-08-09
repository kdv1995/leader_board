import React from "react";
import PropTypes from "prop-types";
import styles from "components/Header/Header.module.scss";
import tablebanner from "assets/banner/tablebanner.png";

export const Header = ({ title, draft }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__topscore}>
          <h3 className={styles.header__title}>{title}</h3>
          <h3 className={styles.header__draft}>{draft}</h3>
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
  title: PropTypes.string.isRequired,
  draft: PropTypes.string.isRequired,
};
