import React from "react";
import styles from "./Projects.module.scss";
import Card from "./Card";

export default function Projects({ posts }) {
  return (
    <section id="projects">
      <div className={styles.container}>
        <div className="section--title">
          <h2>Projects</h2>
        </div>
        <div className={styles.containerLarge}>
          {posts.map((post) => {
            const date = new Date(post.frontmatter.date);

            return <Card key={post.title} post={post} />;
          })}
        </div>
        <div className={styles.containerSmall}>
          {posts.map((post) => {
            const date = new Date(post.frontmatter.date);

            return <Card key={post.title} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
}
