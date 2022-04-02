import React from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Menu(props) {
  return (
    // <div className={styles.menu}>
    <div className={clsx(styles.menu, props.show && styles.active)}>
      <div className={styles.container}>
        <button className={styles.close} onClick={props.hideMenu}></button>
        <div>
          <Link href="/">
            <a className={styles.item} onClick={props.hideMenu}>
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a className={styles.item} onClick={props.hideMenu}>
              About
            </a>
          </Link>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
