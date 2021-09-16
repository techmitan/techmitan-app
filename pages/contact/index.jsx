import React from "react";
import styles from "./style.module.css";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className="container">
      <PageTitle>Contact Us</PageTitle>
      <div className={styles.box}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
        laborum modi. Voluptatem impedit ducimus, omnis voluptatibus repellendus
        iste eum dolorem itaque quia, expedita inventore magni accusamus quis
        molestias nobis? Quibusdam?
      </div>
    </div>
  );
};

export default About;
