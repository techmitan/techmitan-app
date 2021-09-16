import React from "react";
import styles from "./style.module.css";

import MenuBar from "../menuBar";
import MobileMenu from "../mobileMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={`container_fluid ${styles.navbar_wrapper}`}>
        <div className={`container ${styles.navbar}`}>
          <Link href="/">
            <a>
              <div>
                <h2 style={{ color: "red" }}>tech mitan.</h2>
              </div>
            </a>
          </Link>
          <MenuBar />
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
