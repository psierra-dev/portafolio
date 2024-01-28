import React from "react";
import styles from "./scroll.module.css";

const ScrollAutomatic = ({ children, mlist }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.slide}></ul>

      <ul className={styles.slide}></ul>
    </div>
  );
};

export default ScrollAutomatic;
