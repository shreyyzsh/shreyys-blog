import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getExcerpt, getReadingTime, slugify } from "@/lib/utils";

const postsDirectory = path.join(process.cwd(), "content");

const DEFAULT_AUTHOR = "Shreyy";

function getPostFiles() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"));
}

function findPostFile(slug: string) {
  return getPostFiles().find((file) => slugify(file) === slug);
}

function parsePost(file: string) {
  const slug = slugify(file);
  const filePath = path.join(postsDirectory, file);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const description = data.description as string | undefined;

  return {
    slug,
    title: data.title as string,
    date: data.date as string | undefined,
    author: (data.author as string | undefined) ?? DEFAULT_AUTHOR,
    cover: data.cover as string | undefined,
    description,
    excerpt: getExcerpt(content, description),
    readingTime: getReadingTime(content),
    content,
  };
}

export function getAllPosts() {
  const files = getPostFiles();

  return files
    .map((file) => {
      const { content, ...post } = parsePost(file);
      void content;
      return post;
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostBySlug(slug: string) {
  const file = findPostFile(slug);
  if (!file) {
    throw new Error(`Post not found: ${slug}`);
  }

  const filePath = path.join(postsDirectory, file);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const description = data.description as string | undefined;

  return {
    slug,
    title: data.title as string,
    date: data.date as string | undefined,
    author: (data.author as string | undefined) ?? DEFAULT_AUTHOR,
    cover: data.cover as string | undefined,
    description,
    readingTime: getReadingTime(content),
    content,
  };
}
