import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

// reveal
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>tech mitan</title>
        <meta name="description" content="the best digital service" />
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
        </div>
      </Zoom>

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

        <hr />

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
              <Image src="/fimg.svg" width={450} height={250} />
            </div>
          </div>
        </Zoom>
        <hr />
        <Zoom>
          <div className={styles.feature_left}>
            <div className={styles.feature_image}>
              <Image src="/fimg.svg" width={450} height={250} />
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

        <hr />

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
              <Image src="/fimg.svg" width={450} height={250} />
            </div>
          </div>
        </Zoom>
        <hr />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quisquam beatae ad explicabo animi voluptatem excepturi nihil
                quibusdam facilis exercitationem vitae vel expedita fugit
                praesentium quam, unde enim ut? Quas.
              </p>
              <h4>Amit Balbhadre</h4>
            </div>
            <div className={styles.card}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quisquam beatae ad explicabo animi voluptatem excepturi nihil
                quibusdam facilis exercitationem vitae vel expedita fugit
                praesentium quam, unde enim ut? Quas.
              </p>
              <h4>Amit Balbhadre</h4>
            </div>
            <div className={styles.card}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quisquam beatae ad explicabo animi voluptatem excepturi nihil
                quibusdam facilis exercitationem vitae vel expedita fugit
                praesentium quam, unde enim ut? Quas.
              </p>
              <h4>Amit Balbhadre</h4>
            </div>
          </div>
        </Zoom>
      </div>

      <div className="container_fluid redBg">
        <Fade left>
          <h1>Lets make your next big idea, digital!</h1>
          <br />
          <h2>Call Now</h2>
          <h2>90000 11111</h2>
        </Fade>
      </div>
    </div>
  );
}
