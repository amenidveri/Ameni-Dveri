import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

const CATEGORIES_DIR = path.join(process.cwd(), "content/categories");
const HEADER_FILE = path.join(process.cwd(), "content/settings/header.yml");
const VIDEOS_DIR = path.join(process.cwd(), "content/videos");
const ARTICLES_DIR = path.join(process.cwd(), "content/articles");
const REVIEWS_DIR = path.join(process.cwd(), "content/reviews");
const FOOTER_FILE = path.join(process.cwd(), "content/settings/footer.yml");

export function getCategories() {
  const files = fs.readdirSync(CATEGORIES_DIR).filter((f) => f.endsWith(".md"));

  const categories = files.map((filename) => {
    const raw = fs.readFileSync(path.join(CATEGORIES_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      image: data.image,
      link: data.link,
      order: data.order ?? 0,
      published: data.published !== false,
    };
  });

  return categories
    .filter((c) => c.published)
    .sort((a, b) => a.order - b.order);
}

export function getHeaderSettings() {
  const raw = fs.readFileSync(HEADER_FILE, "utf8");
  return yaml.load(raw);
}

export function getVideos() {
  if (!fs.existsSync(VIDEOS_DIR)) return [];
  const files = fs.readdirSync(VIDEOS_DIR).filter((f) => f.endsWith(".md"));

  const videos = files.map((filename) => {
    const raw = fs.readFileSync(path.join(VIDEOS_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      videoUrl: data.video_url,
      poster: data.poster,
      order: data.order ?? 0,
      published: data.published !== false,
    };
  });

  return videos
    .filter((v) => v.published)
    .sort((a, b) => a.order - b.order);
}

// Возвращает последние N опубликованных статей, отсортированных по дате (свежие сверху)
export function getLatestArticles(limit = 6) {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));

  const articles = files.map((filename) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      image: data.image,
      date: data.date instanceof Date ? data.date.toISOString() : data.date,
      published: data.published !== false,
    };
  });

  return articles
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export function getReviews() {
  if (!fs.existsSync(REVIEWS_DIR)) return [];
  const files = fs.readdirSync(REVIEWS_DIR).filter((f) => f.endsWith(".md"));

  const reviews = files.map((filename) => {
    const raw = fs.readFileSync(path.join(REVIEWS_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      name: data.name,
      rating: data.rating ?? 5,
      text: data.text,
      order: data.order ?? 0,
      published: data.published !== false,
    };
  });

  return reviews
    .filter((r) => r.published)
    .sort((a, b) => a.order - b.order);
}

export function getFooterSettings() {
  const raw = fs.readFileSync(FOOTER_FILE, "utf8");
  return yaml.load(raw);
}
