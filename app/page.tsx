import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatPostMeta } from "@/lib/utils";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="mb-10 text-3xl font-normal tracking-tight">Blogs</h1>

      {posts.length === 0 ? (
        <p className="m-0 italic text-muted">No posts yet.</p>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="bg-post p-6">
              {post.cover && (
                <Link href={`/blog/${post.slug}`} className="mb-5 block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.cover}
                    alt=""
                    className="w-full border border-border bg-card"
                  />
                </Link>
              )}

              <h2 className="mb-3 text-xl font-normal leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="no-underline hover:underline"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="mb-3 leading-relaxed text-muted">{post.excerpt}</p>

              <p className="font-mono text-[0.8125rem] text-muted">
                {formatPostMeta({
                  date: post.date,
                  readingTime: post.readingTime,
                  author: post.author,
                })}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
