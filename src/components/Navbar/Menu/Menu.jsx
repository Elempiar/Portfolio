import React from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Menu(props) {
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <button className={styles.close} onClick={props.hideMenu}></button>
        <div>
          <button className={styles.item} onClick={props.hideMenu}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </button>
        </div>
        <div>
          <button className={styles.item} onClick={props.hideMenu}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </button>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
