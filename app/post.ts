import fs from "fs/promises";
import path from "path";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";

const postsPath = path.join(__dirname, "..", "blogs");
const workPath = path.join(__dirname, "..", "work");

export type Post = {
  slug: string;
  title: string;
  desc: string;
  html: string;
};
export type PostMarkdownAttributes = {
  title: string;
  desc: string;
};

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}
export async function getPost(slug: string, type: string): Promise<Post> {
  const filepath = path.join(
    type === "work" ? workPath : postsPath,
    slug + ".md"
  );
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );
  const html = marked(body);

  return {
    slug,
    html,
    title: attributes.title,
    desc: attributes.desc,
  };
}
export async function getPosts(type: string): Promise<Post[]> {
  let dir;
  if (type == "work") {
    dir = await fs.readdir(workPath);
  } else dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(
        path.join(type === "work" ? workPath : postsPath, filename)
      );
      const { attributes, body } = parseFrontMatter(file.toString());
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );
      const html = marked(body);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
        html,
        desc: attributes.desc,
      };
    })
  );
}
