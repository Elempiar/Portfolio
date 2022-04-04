import { useEffect, useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../mdx";
import Head from "next/head";
import styles from "./post.module.scss";

export default function PostPage({ post: { code, frontmatter } }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  useEffect(() => {
    document.querySelector("body").classList.remove("home");
  });
  return (
    <>
      <Head>
        <title>Luuk Verboeket | {frontmatter.title}</title>
        <meta property="og:title" content={frontmatter.title} key="title" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{frontmatter.title}</h1>
          <p className={styles.desc}>{frontmatter.desc}</p>
          <p className={styles.live}>
            Live site is available{" "}
            <a href={frontmatter.live} target="_blank" rel="noreferrer">
              here
            </a>
          </p>
          <div className={styles.tags}>
            <div>
              <h3>year</h3>
              <span>{frontmatter.year}</span>
            </div>
            <div>
              <h3>project</h3>
              <span>{frontmatter.colab}</span>
            </div>
            <div>
              <h3>role</h3>
              {frontmatter.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <div>
              <h3>languages</h3>
              {frontmatter.langs.map((lang) => (
                <Lang key={lang} lang={lang} />
              ))}
            </div>
          </div>
        </div>
        <artcile className={styles.post}>
          <Component />
        </artcile>
      </div>
    </>
  );
}

function Tag({ tag }) {
  return <span>{tag}</span>;
}
function Lang({ lang }) {
  return <span>{lang}</span>;
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
