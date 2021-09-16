import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home.</a>
          </Link>
        </li>

        <li>
          <Link href="/catalogue">
            <a>Catalogue.</a>
          </Link>
        </li>

        <li>
          <Link href="/order">
            <a>Order Now.</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About Us.</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a>Contact Us.</a>
          </Link>
        </li>

        <li>
          <Link href="/account">
            <a>My Account.</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
