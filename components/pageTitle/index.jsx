import React from "react";
import styles from "./style.module.css";

const PageTitle = ({ children }) => {
  return (
    <div className={styles.title}>
      <h2>{children}</h2>
    </div>
  );
};

export default PageTitle;
