import React from "react";
import clsx from "clsx";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.container}>
        <div className={clsx(styles.title, styles.top)}>
          <span>Hey, I&apos;m</span>
          <span className={styles.fill}>Luuk</span>
          <span className={styles.fill}>Verboeket</span>
        </div>
        <img
          className={styles.image}
          src="/images/profilePic.jpg"
          alt="Luuk Verboeket"
        />
        <div className={clsx(styles.title, styles.bot)}>
          <span className={styles.fill}>an aspiring</span>
          <span>front-end</span>
          <span className={styles.fill}>developer</span>
        </div>
      </div>
    </section>
  );
}
