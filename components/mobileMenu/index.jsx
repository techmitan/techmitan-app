import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  let router = useRouter();

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
              color="primary"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <ul>
            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/");
                  setOpen(false);
                }}
              >
                Home
              </Button>
            </li>

            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/catalogue");
                  setOpen(false);
                }}
              >
                catalogue
              </Button>
            </li>

            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/order");
                  setOpen(false);
                }}
              >
                order now
              </Button>
            </li>

            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/about");
                  setOpen(false);
                }}
              >
                about us
              </Button>
            </li>

            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/contact");
                  setOpen(false);
                }}
              >
                contact us
              </Button>
            </li>

            <li>
              <Button
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  router.push("/account");
                  setOpen(false);
                }}
              >
                my account
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
