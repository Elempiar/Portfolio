import React from "react";
import styles from "./Projects.module.scss";
import Link from "next/link";
import Image from "next/image";

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
        <div className={styles.thumb}>
          <Image src={post.frontmatter.thumb} alt="" layout="fill" />
        </div>
      </a>
    </Link>
  );
}

function Tag({ tag }) {
  return <div>{tag}</div>;
}
