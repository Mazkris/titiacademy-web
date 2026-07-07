import * as fs from "fs";
import * as path from "path";

const contentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { metadata } = parseFrontmatter(raw);
    return {
      slug: file.replace(".md", ""),
      title: metadata.title || "",
      date: metadata.date || "",
      excerpt: metadata.excerpt || "",
      category: metadata.category || "Umum",
      author: metadata.author || "Titi Academy",
      tags: metadata.tags || [],
    };
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { metadata, content } = parseFrontmatter(raw);

  return {
    slug,
    title: metadata.title || "",
    date: metadata.date || "",
    excerpt: metadata.excerpt || "",
    category: metadata.category || "Umum",
    author: metadata.author || "Titi Academy",
    tags: metadata.tags || [],
    content,
  };
}

function parseFrontmatter(raw: string): {
  metadata: Record<string, any>;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {}, content: raw };

  const frontmatter = match[1];
  const content = match[2];

  const metadata: Record<string, any> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length > 0) {
      const rawValue = rest.join(":").trim();
      // Parse array: [tag1, tag2]
      if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
        metadata[key.trim()] = rawValue
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim());
      } else {
        metadata[key.trim()] = rawValue;
      }
    }
  });

  return { metadata, content };
}
