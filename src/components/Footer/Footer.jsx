import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={clsx(styles.sub, styles.nav)}>
          <h2>Menu</h2>
          <ul className={styles.list}>
            <Link href="/" passHref>
              <li className={styles.link}>Home</li>
            </Link>
            <Link href="/#about" passHref>
              <li className={styles.link}>About</li>
            </Link>
            <Link href="/#projects" passHref>
              <li className={styles.link}>Projects</li>
            </Link>
            <Link href="/#skills" passHref>
              <li className={styles.link}>Skills</li>
            </Link>
          </ul>
        </div>
        <div className={clsx(styles.sub, styles.contact)}>
          <h2>contact</h2>
          <ul className={styles.list}>
            <Link href="mailto:hey@luukverboeket.nl" passHref>
              <li className={styles.link}>hey@luukverboeket.nl</li>
            </Link>
            <Link href="tel:+31636208954" passHref>
              <li className={styles.link}>+31 6 36208954</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.bot}>
        <div className={styles.socials}>
          <Link
            href="https://www.linkedin.com/in/luuk-verboeket-6a88021b5/"
            passHref
          >
            <a target="_blank">
              <img src="/images/icons/iconLinkedin.svg" />
            </a>
          </Link>
          <Link href="https://github.com/Elempiar" passHref>
            <a target="_blank">
              <img src="/images/icons/iconGithub.svg" />
            </a>
          </Link>
          <Link
            href="https://open.spotify.com/playlist/73YkvrxRZ23xZ8LnhcbZCr"
            passHref
          >
            <a target="_blank">
              <img src="/images/icons/iconSpotify.svg" />
            </a>
          </Link>
        </div>
        <span className={styles.copyright}>© 2022 LUUK VERBOEKET</span>
      </div>
    </footer>
  );
}
