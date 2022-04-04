import React from "react";
import styles from "./Cv.module.scss";

export default function Cv() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.img}>
          <img src="/images/profilePic.jpg" alt="" />
        </div>
        <div className={styles.wrap}>
          <p>
            Hey! My name&apos;s <span className="accent"> Luuk Verboeket</span>,
            and I&apos;m a 23 year-old student from
            <span className="accent"> Maastricht</span>!
          </p>
          <p>
            I&apos;m currently in my 3rd year, studying{" "}
            <span className="accent">
              {" "}
              Communication &amp; Multimedia Design
            </span>
            , at the Maastricht Instute of Arts.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>About Me</h2>
        <div>
          <p>
            I&apos;m an <span className="accent">eager learner</span>,
            passionate about anything front-end, very{" "}
            <span className="accent">social</span>, pretty{" "}
            <span className="accent">easy-going</span> and I like to add a pinch
            of <span className="accent">humor</span>, whenever possible.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Skills</h2>
        <div>
          <p>
            I&apos;m very comfortable with the fundementals of web-development
            <span className="accent"> (HTML / CSS / JS)</span>. I also know the
            basics of <span className="accent"> React and Wordpress</span>, and
            have an eye for design. I&apos;m a quick learner, and not afraid of
            challenges when it comes to learning something new.
          </p>
          <p>
            I&apos;m familiar with most Adobe products, Visual Studio Code,
            GitHub and Cloudflare.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Goals</h2>
        <div>
          <p>
            I strive to become a{" "}
            <span className="accent">professional front-end designer</span> who
            can design and develop clean and well-polished websites for any
            client, big or small.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Motivation</h2>
        <div>
          <p>
            I&apos;m driven by the{" "}
            <span className="accent">puzzle-like challenges</span> that
            development poses me, and the{" "}
            <span className="accent">creative output</span> that web design
            offers me. Combining these two into a final product, that gives a
            client everything they wanted, is one of the most{" "}
            <span className="accent">satisfying and fun </span>
            things for me to do.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Interests</h2>
        <div>
          <p>
            Besides front-end development, I&apos;m also very passionate about{" "}
            <span className="accent">gaming and music</span>. These 3 together
            make up most of my daily activities.
          </p>
          <p>
            I&apos;ve played the <span className="accent">guitar</span> for
            about 10 years now, and I&apos;m almost always listening to music.
            My favourite bands are{" "}
            <span className="accent">
              Dire Straits, Rolling Stones and Queen
            </span>
            , and I mostly listen to{" "}
            <span className="accent">Classic Rock</span>.
          </p>
          <p>
            When it comes to gaming, my interests shift all the time. I&apos;m
            currently quite competetive in{" "}
            <span className="accent">Valorant</span>, and I&apos;ve been playing
            <span className="accent"> RuneScape</span> for 15+ years. Besides
            that, I just play any game that lets me and my friends have a good
            time together.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Experience</h2>
        <div>
          <p className={styles.work}>
            <span className={styles.employer}>PostNL</span>
            <span className={styles.function}>
              Magazijn Medewerker Depot Born
            </span>
            <span className={styles.yearsActive}>2017-2019</span>
          </p>
          <p className={styles.work}>
            <span className={styles.employer}>Belastingdienst Nederland</span>
            <span className={styles.function}>Data-entry KOT Heerlen</span>
            <span className={styles.yearsActive}>2016-2017</span>
          </p>
        </div>
      </div>
    </div>
  );
}
