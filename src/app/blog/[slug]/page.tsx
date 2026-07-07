import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";

// Next.js 16: params is a Promise
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-accent-light text-sm hover:underline mb-4 inline-block"
          >
            ← Kembali ke Blog
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag as string}
                className="text-xs font-medium bg-white/10 text-gray-300 px-2.5 py-1 rounded-full"
              >
                {tag as string}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex gap-4 text-sm text-gray-300">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-primary prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted prose-p:leading-relaxed
            prose-li:text-muted
            prose-strong:text-primary
            prose-a:text-accent
            prose-blockquote:border-accent prose-blockquote:text-muted
            prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-ul:list-disc prose-ol:list-decimal"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-accent font-medium hover:underline"
          >
            ← Semua Artikel
          </Link>
        </div>
      </article>
    </div>
  );
}

// Simple markdown to HTML renderer
function renderMarkdown(md: string): string {
  let html = md;

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2">$1</a>'
  );

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr>");

  // Paragraphs (wrap text blocks)
  html = html
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (
        block.startsWith("<h") ||
        block.startsWith("<ul") ||
        block.startsWith("<ol") ||
        block.startsWith("<hr") ||
        block.startsWith("<li")
      ) {
        return block;
      }
      return `<p>${block.replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");

  return html;
}
