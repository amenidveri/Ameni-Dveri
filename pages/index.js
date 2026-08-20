import Header from "../components/Header";
import Categories from "../components/Categories";
import VideoSection from "../components/VideoSection";
import ArticlesList from "../components/ArticlesList";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import {
  getCategories,
  getHeaderSettings,
  getVideos,
  getLatestArticles,
  getReviews,
  getFooterSettings,
} from "../lib/content";

export default function Home({ categories, headerSettings, videos, articles, reviews, footerSettings }) {
  return (
    <div>
      <Header settings={headerSettings} />
      <Categories items={categories} />
      <VideoSection items={videos} />
      <ArticlesList items={articles} />
      <About text={footerSettings.about_text} />
      <Reviews items={reviews} />
      <Footer settings={footerSettings} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      categories: getCategories(),
      headerSettings: getHeaderSettings(),
      videos: getVideos(),
      articles: getLatestArticles(6),
      reviews: getReviews(),
      footerSettings: getFooterSettings(),
    },
  };
}
