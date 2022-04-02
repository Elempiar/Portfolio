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
              <li>Home</li>
            </Link>
            <Link href="/#about" passHref>
              <li>About</li>
            </Link>
            <Link href="/#projects" passHref>
              <li>Projects</li>
            </Link>
            <Link href="/#skills" passHref>
              <li>Skills</li>
            </Link>
          </ul>
        </div>
        <div className={clsx(styles.sub, styles.contact)}>
          <h2>contact</h2>
          <ul className={styles.list}>
            <li>hey@luukverboeket.nl</li>
            <li>+31 6 36208954</li>
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
