import React from "react";
import styles from "./style.module.css";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";

const Catalogue = () => {
  return (
    <div className="container">
      <PageTitle>Catalogue</PageTitle>
      <div className={styles.box}>
        <div className={styles.title}>e-commerce</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>news media</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>education</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>streaming services</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>social causes</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.title}>Money Transactions</div>
        <div className={styles.web_grid}>
          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>

          <div className={styles.web_item}>
            <Image src="/akhrot.png" width={400} height={250} />
            <p>akhrot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
