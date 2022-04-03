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
        <h2>werkervaring</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit, ex tempus feugiat consectetur, enim nulla molestie
            libero, sed vestibulum lorem mauris nec erat. Cras mattis tellus non
            molestie fringilla.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>opleiding</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit, ex tempus feugiat consectetur, enim nulla molestie
            libero, sed vestibulum lorem mauris nec erat. Cras mattis tellus non
            molestie fringilla.
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <h2>Vaardigheden</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit, ex tempus feugiat consectetur, enim nulla molestie
            libero, sed vestibulum lorem mauris nec erat. Cras mattis tellus non
            molestie fringilla.
          </p>
        </div>
      </div>
    </div>
  );
}
