import React from "react";
import PageTitle from "../../components/pageTitle";
import Button from "@material-ui/core/Button";

const Order = () => {
  return (
    <div className="container">
      <PageTitle>Order Now</PageTitle>
      <div className={`box text-center fontBig`}>
        <p>Have an idea which you want to make digital?</p>
        <p>You are at right place!</p>
        <p>Please create a free account now and place your order.</p>
        <p>
          We provide a seamless one stop platform for you to order your project,
          pay for it and managing and delivery of project.
        </p>
        <div style={{ marginBottom: "40px" }}></div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            window.open("https://mytechmitan.netlify.app");
          }}
        >
          Create Free Account Now
        </Button>
      </div>
    </div>
  );
};

export default Order;
