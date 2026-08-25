import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";

const CATEGORIES_DIR = path.join(process.cwd(), "content/categories");
const PRODUCTS_DIR = path.join(process.cwd(), "content/products");
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

// Читает конкретные товары/модели (не сами разделы, а карточки внутри них).
export function getProducts() {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  const files = fs.readdirSync(PRODUCTS_DIR).filter((f) => f.endsWith(".md"));

  const products = files.map((filename) => {
    const raw = fs.readFileSync(path.join(PRODUCTS_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      image: data.image,
      category: data.category,
      subcategory: data.subcategory || null,
      popular: !!data.popular,
      order: data.order ?? 0,
      published: data.published !== false,
    };
  });

  return products
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);
}

// Верхняя витрина «Ходовые двери» — товары с флагом popular, вперемешку по разделам.
export function getPopularProducts(products, limit = 30) {
  return products.filter((p) => p.popular).slice(0, limit);
}

// Товары, сгруппированные по разделу (slug категории) — для полных секций на странице.
export function getProductsByCategory(products) {
  const map = {};
  for (const p of products) {
    if (!map[p.category]) map[p.category] = [];
    map[p.category].push(p);
  }
  return map;
}

// Под-разделы (напр. «с зеркалом», «с шпоном») внутри категории — по одному
// примеру каждого для тизера в самом низу страницы, плюс общее число товаров в нём.
export function getSubcategoryTeasers(products) {
  const groups = {};
  for (const p of products) {
    if (!p.subcategory) continue;
    const key = `${p.category}::${p.subcategory}`;
    if (!groups[key]) {
      groups[key] = {
        category: p.category,
        subcategory: p.subcategory,
        example: p,
        count: 0,
      };
    }
    groups[key].count += 1;
  }
  return Object.values(groups);
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
      category: data.category || null,
      order: data.order ?? 0,
      published: data.published !== false,
    };
  });

  return videos
    .filter((v) => v.published)
    .sort((a, b) => a.order - b.order);
}

// Группирует видео по slug'у категории — используется, чтобы показать
// нужные видео прямо внутри соответствующего раздела на главной странице.
export function getVideosByCategory(videos) {
  const map = {};
  for (const v of videos) {
    if (!v.category) continue;
    if (!map[v.category]) map[v.category] = [];
    map[v.category].push(v);
  }
  return map;
}

// Видео без привязки к категории — показываются отдельным общим блоком.
export function getGeneralVideos(videos) {
  return videos.filter((v) => !v.category);
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
