import React from "react";
import Hero from "../components/Hero/Hero";
import Navmain from "../components/Navmain/Navmain";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import styles from "../scss/index.module.scss";
import { getAllPosts } from "../mdx";

export default function App({ posts }) {
  return (
    <>
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
