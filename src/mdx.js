import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { remarkMdxImages } from "remark-mdx-images";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import uniq from "lodash/uniq";

export const POSTS_PATH = path.join(process.cwd(), "./src/posts");

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), {
    encoding: "utf-8",
  });
};

export function getSlug(path) {
  const pathParts = path.split("\\");
  const lastFilePart = pathParts[pathParts.length - 1];
  const slug = lastFilePart.replace(/\.mdx?$/, "");
  return slug;
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = getSlug(fileName);
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    })
    .filter((post) => post.frontmatter.published === true)
    .sort(function (a, b) {
      // compare 2 dates
      if (a.frontmatter.date < b.frontmatter.date) {
        return -1;
      }
      if (a.frontmatter.date > b.frontmatter.date) {
        return 1;
      }
      return 0;
    })
    .map((postData, index) => {
      return {
        ...postData,
        id: index+1
    }
  })
};

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + ".mdx");

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: POSTS_PATH,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
        remarkGfm,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
        [rehypePrism, {}],
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".jpg": "dataurl",
        ".png": "dataurl",
      };
      options.define = {
        ...(options.define || {}),
        global: "globalThis",
      };

      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};
