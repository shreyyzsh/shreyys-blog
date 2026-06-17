export function slugify(value: string) {
  return value
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getExcerpt(content: string, description?: string) {
  if (description) return description;

  const plain = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#*`_~[\]()]/g, "")
    .replace(/\n+/g, " ")
    .trim();

  if (plain.length <= 220) return plain;

  return `${plain.slice(0, 220).trim()}...`;
}

export function formatPostMeta({
  date,
  readingTime,
  author,
}: {
  date?: string;
  readingTime: number;
  author: string;
}) {
  const parts: string[] = [];

  if (date) parts.push(formatDate(date));
  parts.push(`${readingTime} min`);
  parts.push(author);

  return parts.join(" · ");
}
