import React from "react";
import styles from "./style.module.css";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Catalogue = () => {
  return (
    <div className="container">
      <PageTitle>Catalogue</PageTitle>
      <div className={styles.box}>
        <div className={styles.title}>e-commerce</div>
        <div className={styles.web_grid}>
          <Link href="http://my-akhrot.herokuapp.com/">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/akhrot.png" width={400} height={250} />
                <p>akhrot</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>News media</div>
        <div className={styles.web_grid}>
          <Link href="https://mehulvani.in">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/mehulvani.png" width={400} height={250} />
                <p>mehul vani</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Education</div>
        <div className={styles.web_grid}>
          <Link href="https://testmitan.com">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/testmitan.png" width={400} height={250} />
                <p>test mitan</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>Streaming services</div>
        <div className={styles.web_grid}>
          <Link href="https://disneyhotstarapp.web.app/">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/dH.png" width={400} height={250} />
                <p>hotstar Clone - demo</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Social causes</div>
        <div className={styles.web_grid}>
          <Link href="https://getvaccinatedindia.in/">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/gVI.png" width={400} height={250} />
                <p>getVaccinated India</p>
              </motion.div>
            </a>
          </Link>

          <Link href="https://wildfire-tracker-31229.web.app/">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/wildfire.png" width={400} height={250} />
                <p>NASA Wildfire Tracker</p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Banking and Finance</div>
        <div className={styles.web_grid}>
          <Link href="https://crypto-watch-591f1.web.app/">
            <a target="_blank">
              <motion.div
                className={styles.web_item}
                whileHover={{ scale: 1.1 }}
              >
                <Image src="/crypto.png" width={400} height={250} />
                <p>crypto currency tracker </p>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
