import { useEffect } from "react";
import Head from "next/head";
import Cv from "../components/Cv/Cv";
import styles from "../scss/page.module.scss";

export default function About({ posts }) {
  useEffect(() => {
    document.querySelector("body").classList.remove("home");
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Luuk Verboeket | About</title>
      </Head>
      <Cv />
    </>
  );
}
