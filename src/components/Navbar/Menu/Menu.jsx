import React from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import Link from "next/link";

export default function Menu(props) {
  return (
    <div>
      <button className={styles.close} onClick={props.hideMenu}></button>
      <div></div>
    </div>
  );
}
