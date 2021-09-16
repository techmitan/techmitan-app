import React from "react";
import styles from "./style.module.css";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";

const Order = () => {
  return (
    <div className="container">
      <PageTitle>Order Now</PageTitle>
      <div className={styles.box}>
        Have an idea which you want to make digital?
        <p>You are at right place!</p>
        <p>Please create a free account now and place your order.</p>
      </div>
    </div>
  );
};

export default Order;
