import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../mdx";
import Head from "next/head";
import styles from "../../scss/post.module.scss";

export default function PostPage({ post: { code, frontmatter } }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} key="title" />
      </Head>
      <div className={styles.post}>
        <h1>{frontmatter.title}</h1>
        <Component />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  if (typeof params?.slug !== "string") {
    throw new Error("params doesn't have slug");
  }
  const post = await getSinglePost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
