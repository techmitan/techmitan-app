import React from "react";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className="container text-center">
      <PageTitle>About Us</PageTitle>

      <Image src="/about.svg" width={900} height={450} alt={"about-us"} />

      <div className="box">
        <p>
          tech mitan is a modern day digital platform to provide you end to end
          solution to help your ideas grow from paper to digital.
        </p>
        <p>
          tech mitan offers a variety of website design and development
          services, from creating mobile web development solutions and
          responsive website designs, e-commerce, educational products and a lot
          more using the latest and modern day web technologies.
        </p>
        <p>
          We just don't create digital products, we solve all your technology
          related problems be it hosting, digital marketing, development or
          design!
        </p>
        <p>
          We strongly believe in quality, trust, transparency and digital
          inclusiveness.
        </p>
      </div>
    </div>
  );
};

export default About;
