
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import RecentWorks from "@/components/RecentWorks";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <RecentWorks />
        <LatestArticles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
