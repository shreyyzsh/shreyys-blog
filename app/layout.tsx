import "./globals.css";
import Link from "next/link";
import { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyynotes.vercel.app"),

  title: "Shreyy Notes",
  description: "Documenting my notes, ideas, and thoughts on technology and life.",

  openGraph: {
    title: "Shreyy Notes",
    description: "Documenting my notes, ideas, and thoughts on technology and life.",
    url: "https://shreyynotes.vercel.app",
    siteName: "Shreyy Notes",
    type: "website",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Shreyy Notes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark");})();`,
          }}
        />
      </head>
      <body>
        <div className="mx-auto max-w-2xl px-6 py-12 pb-16">
          <header className="mb-16 flex items-center justify-between border-b border-border pb-4">
            <Link
              href="/"
              className="inline-block font-mono text-sm font-normal uppercase tracking-widest no-underline hover:underline"
            >
              Shreyy
            </Link>
            <nav className="flex items-center gap-6 font-mono text-sm">
              <a
                href="mailto:shreyyzsh@gmail.com"
                className="no-underline hover:underline"
              >
                Contact
              </a>
              <ThemeToggle />
            </nav>
          </header>
          {children}
          <footer className="mt-20 border-t border-border pt-6 font-mono text-sm text-muted">
            © {new Date().getFullYear()} ·{" "}
            <a
              href="https://shreyyzsh.vercel.app"
              className="text-muted no-underline hover:underline"
            >
              shreyyzsh
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
