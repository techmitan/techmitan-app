import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <hr style={{ borderColor: "red" }} />
      <div className={styles.footer}>
        <p>© tech mitan {year}</p>

        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
