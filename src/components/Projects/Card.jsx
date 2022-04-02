import React from "react";
import styles from "./Projects.module.scss";
import Link from "next/link";

export default function Card({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className={styles.card}>
        <span className={styles.number}>{`${post.id}`.padStart(2, "0")}</span>
        <span className={styles.title}>{post.frontmatter.title}</span>
        <span className={styles.category}>
          {post.frontmatter.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </span>
        <img className={styles.thumb} src={post.frontmatter.thumb} alt="" />
      </a>
    </Link>
  );
}

function Tag({ tag }) {
  return <div>{tag}</div>;
}
