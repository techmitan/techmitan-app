import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

// reveal
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// material
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>tech mitan</title>
        <meta
          name="description"
          content="the best web development service in Chhattisgarh"
        />
        <meta
          name="keywords"
          content="WEB DEVELOPMENT, web design, website, app, HTML, CSS, JavaScript"
        ></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Zoom>
        <div className={styles.hero_text}>
          <h1>
            We are your <span style={{ color: "#E50914" }}>tech mitan.</span>
          </h1>
          <h1>
            We make your ideas{" "}
            <span style={{ color: "#0071eb" }}>Digital.</span>
          </h1>
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<WhatsAppIcon />}
              size="large"
              onClick={() => {
                window.open("tel:+916261996166");
              }}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </Zoom>

      {/* services */}

      <div className="box container">
        <div className="title">
          <h2>Our Services</h2>
        </div>

        <Zoom>
          <div className={styles.box_grid}>
            <div className={styles.icon_list}>
              <Image src="/webdev.png" width={150} height={150} />
              <h4>Web Design and Development</h4>
              <p>
                Modern Web Development and Design with lastest technology to
                make your ideas digital. We develop everthing from scratch!
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/digitalmarket.png" width={150} height={150} />
              <h4>Digital Marketing</h4>
              <p>
                Digital Marketing services to help your ideas grow their social
                media presence and make your brand outstanding in digital crowd
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/digitalhelp.png" width={150} height={150} />
              <h4>Tech Consultancy</h4>
              <p>
                Have an idea or existing digital platform but worried about
                emerging technology challenges? We are here to help you with all
                your tech problems.
              </p>
            </div>
          </div>
        </Zoom>
      </div>

      {/* why choose us? */}

      <div className="box container">
        <div className="title">
          <h2>Why choose us?</h2>
        </div>

        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_image}>
              <Image src="/fimg.svg" width={450} height={250} />
            </div>
            <div className={styles.feature_text}>
              <h3>
                Bye Bye{" "}
                <span
                  style={{
                    color: "#0071eb",
                    textDecoration: "line-through",
                    textDecorationColor: "red",
                  }}
                >
                  Websites.
                </span>
              </h3>
              <h3>
                Say Hello to{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  Web-Apps!
                </span>
              </h3>
              <p>
                We do not create traditional websites. We create modern
                web-applications which are fast, secure and user-friendly! We
                build Single Page Applications (SPAs) which every big company
                like YouTube, Facebook, Netflix are using now.
              </p>
            </div>
          </div>
        </Zoom>

        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_text}>
              <h3>
                We Use{" "}
                <span
                  style={{
                    color: "#0071eb",
                  }}
                >
                  Latest Technology.
                </span>
              </h3>
              <h3>
                To Build{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  Your Next Big Idea!
                </span>
              </h3>
              <p>
                We know how important an idea is, and so we use all the latest
                technologies to build your next big idea. We code everything
                from scratch and use no bloatwares. You will feel the difference
                once you see our projects!
              </p>
            </div>
            <div className={styles.feature_image}>
              <Image src="/tech.png" width={250} height={250} />
            </div>
          </div>
        </Zoom>

        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_image}>
              <Image src="/solution.png" width={250} height={250} />
            </div>
            <div className={styles.feature_text}>
              <h3>
                We Provide{" "}
                <span
                  style={{
                    color: "#0071eb",
                  }}
                >
                  End to End Solution.
                </span>
              </h3>
              <h3>
                To Help{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  You Grow From Zero to Hero!
                </span>
              </h3>
              <p>
                Once you share your next big idea with us, we provide end to end
                digital solution for your ideas. If you are a start-up and
                looking for a technology partner, you are at right place! Server
                hosting, domain system, development digital marketing everthing
                is taken care of by us.
              </p>
            </div>
          </div>
        </Zoom>

        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_text}>
              <h3>
                We Believe In{" "}
                <span
                  style={{
                    color: "#0071eb",
                  }}
                >
                  Quality.
                </span>
              </h3>
              <h3>
                With{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  Competitive Cost!
                </span>
              </h3>
              <p>
                We at tech mitan strongly believe in quality of the products we
                design. You will be a part of the development jounery and will
                see your idea grow from paper to digital. We provide you the
                best quality products at competitve price. You will believe it
                when you see our products.
              </p>
            </div>
            <div className={styles.feature_image}>
              <Image src="/quality.png" width={250} height={250} />
            </div>
          </div>
        </Zoom>

        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_image}>
              <Image src="/startup.png" width={250} height={250} />
            </div>
            <div className={styles.feature_text}>
              <h3>
                If you are a{" "}
                <span
                  style={{
                    color: "#0071eb",
                  }}
                >
                  Start-Up
                </span>
              </h3>
              <h3>
                We become your{" "}
                <span
                  style={{
                    color: "red",
                  }}
                >
                  Technology Partner!
                </span>
              </h3>
              <p>
                We at tech mitan started with the idea of mitan in Chhattisgarh
                which means a dear friend. If you are a budding startup and
                looking for a technology partner, we provide you the best in
                class customised tech support to grow your idea from paper to
                digital. Contact us for more information.
              </p>
            </div>
          </div>
        </Zoom>
      </div>

      <div className="box container">
        <div className="title">
          <h2>What People Say about Us?</h2>
        </div>

        <Zoom>
          {" "}
          <div className={styles.box_grid}>
            <div className={styles.card}>
              <p>
                tech mitan एक विश्वसनीय और क्वालिटी सर्विस देने वाला
                प्लाट्फ़ोर्म है, हमारी न्यूज़ वेबसाइट टेक मितान ने बनाई जो की
                पहले से बेहतर और फ़ास्ट लोडिंग है। हमें ख़ुशी है की हमने अपनी
                वेबसाइट टेक मितान से बनवाई। छत्तीसगढ़ में इस प्रकार की
                टेक्नॉलोजी और सर्विस शायद ही कहीं और मिलेगी।
              </p>
              <h4>mehul vani</h4>
            </div>
            <div className={styles.card}>
              <p>
                We are happy that we choose tech mitan as technology partner for
                our e-commerce start up. They provide best in class digital
                services from web development to hosting and continuous support.
                Their believe in quality and robust technology is just superb.
              </p>
              <h4>akhrot</h4>
            </div>
            <div className={styles.card}>
              <p>
                When the whole world was going through Corona Virus crisis we
                decided to make a service for vaccine slot discovery in India.
                We reached out to techmitan for service and they created the
                application just as we wanted. Their problem solving technique
                and understanding of services is just amazing.
              </p>
              <h4>getVaccinatedIndia</h4>
            </div>
          </div>
        </Zoom>
      </div>

      <div className="box container">
        <div className="title">
          <h2>Our Features</h2>
          <p>All our web development plans include</p>
        </div>

        <Fade>
          <div className={styles.box_grid}>
            <div className={styles.icon_list}>
              <Image src="/spa.png" width={150} height={150} />
              <h4>Single Page Applications</h4>
              <p>
                Our plans include Single Page Applications (SPAs) for all our
                web development projects
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/domain.png" width={150} height={150} />
              <h4>Domain Name Registration</h4>
              <p>
                Getting the perfect domain name for your business or idea is
                included in all our plans
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/aws.png" width={150} height={150} />
              <h4>AWS as Our Cloud Partner</h4>
              <p>
                All our plans use Amazon Web Services (AWS) as Cloud Partner for
                web service delivery and management
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/database.png" width={150} height={150} />
              <h4>FREE Managed Cloud Database</h4>
              <p>
                All our plans include FREE 512 MB cloud managed database to
                store your valuable data. Your Data is safe and secured!
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/https.jpg" width={150} height={150} />
              <h4>SSL/TLS Security FREE FOREVER</h4>
              <p>
                All our plans include FREE FOREVER SSL/TLS certificate for all
                your domain names to protect you and your users from hacking and
                digital fraud.
              </p>
            </div>

            <div className={styles.icon_list}>
              <Image src="/server.png" width={150} height={150} />
              <h4>FREE Global CDN</h4>
              <p>
                All our plans include FREE Global Content Delivery Network (CDN)
                to serve your web apps faster and smoothly all across the world.
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/digital.png" width={150} height={150} />
              <h4>One Stop Digital Service Delivery</h4>
              <p>
                tech mitan offers you seamlessly one stop platform for your
                projects with us. Right from ordering to payment to project
                delivery, everything happens on techmitan.com!
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/data.png" width={150} height={150} />
              <h4>Data Center in India</h4>
              <p>
                We know how valuable data is for you! We use local data centers
                in India to store and serve all your data for security and
                faster delivery!
              </p>
            </div>
            <div className={styles.icon_list}>
              <Image src="/help.png" width={150} height={150} />
              <h4>1 Year Technology Support</h4>
              <p>
                All our plans include 1 year technology support for your web
                apps. We just do not develop for you, we also support you for 1
                year to help you grow!
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="container_fluid redBg">
        <Fade left>
          <h1>Lets make your next big idea, digital!</h1>
          <br />
          <h2>Contact Now</h2>
          <h2 style={{ marginTop: "10px" }}>+91 62619 96166</h2>
        </Fade>
      </div>

      <div className="box container">
        <div className="title">
          <h2>Social Media</h2>
          <p>Connect with us on social media</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link href="https://facebook.com">
            <a>
              <Image src="/facebook.png" width={50} height={50} />
            </a>
          </Link>
          <Link href="https://wa.me/+916261996166">
            <a>
              <Image src="/whatsapp.png" width={50} height={50} />
            </a>
          </Link>

          <Link href="https://instagram.com">
            <a>
              <Image src="/instagram.png" width={50} height={50} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
