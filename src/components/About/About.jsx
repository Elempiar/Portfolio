import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className="section--title-cover">
        <h2>Who&apos;s this guy?</h2>
        <a href="localhost:3000">More about me</a>
      </div>
      <p>
        Hey! I&apos;m a Dutch{" "}
        <span className="accent">Communication &amp; Multimedia Design</span>{" "}
        student from Maastricht who&apos;s passionate about everything{" "}
        <span className="accent">front-end</span>: Design, and especially{" "}
        <span className="accent">development</span>.
      </p>
    </section>
  );
}
