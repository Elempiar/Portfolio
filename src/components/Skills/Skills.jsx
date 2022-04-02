import React from "react";
import styles from "./Skills.module.scss";

export default function Blog() {
  return (
    <section id="skills" className={styles.container}>
      <ul className={styles.list}>
        <h2>Skills</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>PhotoShop</li>
        <li>Adobe XD</li>
        <div className="clear"></div>
      </ul>
      <ul className={styles.list}>
        <h2>Learning</h2>
        <li>React</li>
        <li>Next.js</li>
        <li>Wordpress</li>
        <li>Photoshop Drawing</li>
        <li>Blender</li>
        <li className={styles.planning}>Illustrator</li>
        <li className={styles.planning}>GSAP</li>
        <div className="clear"></div>
      </ul>
      <div className="clear"></div>
    </section>
  );
}
