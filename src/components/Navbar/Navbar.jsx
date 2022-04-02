import { useState } from "react";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import Link from "next/link";
import Menu from "./Menu/Menu";

export default function Navbar() {
  const [show, setShow] = useState(false);
  function showMenu() {
    setShow(true);
  }

  function hideMenu() {
    setShow(false);
  }

  return (
    <>
      {show && <Menu hideMenu={hideMenu} />}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.title}>
              Luuk
              <span className={clsx("strong", styles.mobileHidden)}>
                Verboeket
              </span>
            </a>
          </Link>
          <button className={styles.menu} onClick={showMenu}>
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
