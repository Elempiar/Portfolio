import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";

export default function Projects({ posts }) {
  return (
    <section id="projects" className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.containerLarge}>
        {posts.map((post) => {
          return <Card key={post.title} post={post} />;
        })}
      </div>

      <div className={styles.containerSmall}>
        {posts.map((post) => {
          return <Card key={post.title} post={post} />;
        })}
      </div>
    </section>
  );
}
