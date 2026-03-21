import { useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className = "" }) => {
  const { setNews, fetchNews } = useNewsContext();
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (category) => {
    try {
      setLoading(true);
      setActiveCategory(category);

      const data = await fetchNews(`/everything?q=${category}`);

      if (data?.articles) {
        setNews(data.articles);
      } else {
        setNews([]);
      }

    } catch (error) {
      console.error("Category fetch error:", error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`sticky top-0 z-50 bg-base-100 ${className}`}>
      <Wrapper>
        <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 gap-5 scrollbar-none py-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              disabled={loading}
              className={`px-5 py-2 rounded-full font-bold border-2 transition-all duration-300 capitalize whitespace-nowrap shadow-sm active:scale-95
                ${activeCategory === category
                  ? "bg-purple-700 text-white border-purple-700 drop-shadow-md"
                  : "bg-base-200 text-purple-300 border-purple-900/50 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:drop-shadow-md"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading && activeCategory === category
                ? "Wait..."
                : category}
            </button>
          ))}

        </div>
      </Wrapper>
    </div>
  );
};

export default Category;