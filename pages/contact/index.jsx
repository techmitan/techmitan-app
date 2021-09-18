import React from "react";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className="container text-center">
      <PageTitle>Contact Us</PageTitle>
      <div className="box">
        <p>mail: techmitan@gmail.com</p>
        <p>call/whatsapp : +91 62619 96166</p>
      </div>
    </div>
  );
};

export default About;
