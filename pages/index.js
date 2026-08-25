import Header from "../components/Header";
import DesktopSidebar from "../components/DesktopSidebar";
import QuickNav from "../components/QuickNav";
import PopularGrid from "../components/PopularGrid";
import CategorySections from "../components/CategorySections";
import SubcategoryTeasers from "../components/SubcategoryTeasers";
import VideoSection from "../components/VideoSection";
import ArticlesList from "../components/ArticlesList";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import StickyContactBar, { STICKY_BAR_HEIGHT } from "../components/StickyContactBar";
import {
  getCategories,
  getHeaderSettings,
  getProducts,
  getPopularProducts,
  getProductsByCategory,
  getSubcategoryTeasers,
  getVideos,
  getVideosByCategory,
  getGeneralVideos,
  getLatestArticles,
  getReviews,
  getFooterSettings,
} from "../lib/content";

export default function Home({
  categories,
  headerSettings,
  popularProducts,
  productsByCategory,
  subcategoryTeasers,
  videosByCategory,
  generalVideos,
  articles,
  reviews,
  footerSettings,
}) {
  return (
    <div id="top" style={{ paddingBottom: STICKY_BAR_HEIGHT }}>
      <Header settings={headerSettings} categories={categories} />
      <DesktopSidebar categories={categories} />

      <div className="main-content">
        <QuickNav items={categories} />
        <PopularGrid items={popularProducts} />
        <CategorySections
          categories={categories}
          productsByCategory={productsByCategory}
          videosByCategory={videosByCategory}
        />
        <SubcategoryTeasers teasers={subcategoryTeasers} />
        <QuickNav items={categories} />
        <VideoSection items={generalVideos} />
        <ArticlesList items={articles} />
        <About text={footerSettings.about_text} />
        <Reviews items={reviews} />
        <Footer settings={footerSettings} />
      </div>

      <StickyContactBar settings={headerSettings} />

      <style jsx global>{`
        @media (min-width: 960px) {
          .main-content {
            margin-left: 220px;
          }
          .main-content > div {
            max-width: 900px !important;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const videos = getVideos();
  const products = getProducts();
  return {
    props: {
      categories: getCategories(),
      headerSettings: getHeaderSettings(),
      popularProducts: getPopularProducts(products, 30),
      productsByCategory: getProductsByCategory(products),
      subcategoryTeasers: getSubcategoryTeasers(products),
      videosByCategory: getVideosByCategory(videos),
      generalVideos: getGeneralVideos(videos),
      articles: getLatestArticles(6),
      reviews: getReviews(),
      footerSettings: getFooterSettings(),
    },
  };
}
