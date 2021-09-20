import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Button from "@material-ui/core/Button";


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
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              // window.open("https://mytechmitan.netlify.app");
              alert("Will be live soon!");
            }}
          >
            My Account
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
