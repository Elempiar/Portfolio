import { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Navmain from "../components/Navmain/Navmain";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../scss/index.module.scss";
import { getAllPosts } from "../mdx";
import Head from "next/head";

export default function App({ posts }) {
  useEffect(() => {
    document.querySelector("body").classList.add("home");
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Luuk Verboeket | Front-end Developer</title>
      </Head>

      <Hero />
      <div className={styles.homePage}>
        <Navmain />
        <About />
        <Projects posts={posts} />
        <Skills />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};
