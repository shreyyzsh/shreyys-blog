import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { markdownComponents } from "@/lib/markdown";
import { formatPostMeta } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main>
      <Link
        href="/"
        className="mb-8 inline-block font-mono text-[0.8125rem] no-underline hover:underline"
      >
        ← Back
      </Link>

      <div className="bg-post p-6">
        {post.cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt=""
            className="mb-8 w-full border border-border bg-card"
          />
        )}

        <header className="mb-10 border-b border-border pb-5">
          <h1 className="mb-2 text-[1.75rem] font-normal leading-tight tracking-tight">
            {post.title}
          </h1>
          <p className="font-mono text-[0.8125rem] text-muted">
            {formatPostMeta({
              date: post.date,
              readingTime: post.readingTime,
              author: post.author,
            })}
          </p>
        </header>

        <article className="text-[1.0625rem]">
          <ReactMarkdown components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
