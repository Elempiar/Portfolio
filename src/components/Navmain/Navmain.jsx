import React from "react";
import styles from "./Navmain.module.scss";

export default function Navmain() {
  return (
    <nav className={styles.container}>
      <a href="#about" className={styles.button}>
        About
      </a>
      <a href="#projects" className={styles.button}>
        Projects
      </a>
      <a href="#skills" className={styles.button}>
        Skills
      </a>
    </nav>
  );
}
