import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h1 className="text-4xl font-bold text-white mt-3 mb-4">
            Insight & Artikel HR
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tips, strategi, dan wawasan seputar pengembangan SDM, leadership, 
            dan manajemen organisasi.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted text-lg">Belum ada artikel. Segera hadir!</p>
            <Link
              href="/"
              className="inline-block mt-4 text-accent font-medium hover:underline"
            >
              ← Kembali ke Home
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Back link */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-muted hover:text-accent transition-colors"
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  );
}
