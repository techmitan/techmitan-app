import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobile_menu}>
      <div className={styles.btn}>
        <IconButton
          aria-label="menu"
          color="primary"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {open && (
        <div className={styles.menu_screen}>
          <div className={styles.closeIcon}>
            <IconButton
              aria-label="menu"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
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
      )}
    </div>
  );
};

export default MobileMenu;
