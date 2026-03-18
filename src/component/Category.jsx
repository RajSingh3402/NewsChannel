import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";






const Category = ({ className = "" }) => {

  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data?.articles || []);
  }

  return (
    <div className={`sticky top-0 z-50 bg-base-100 ${className}`}>
      <Wrapper>
        <div className="max-w-full w-fit m-auto flex overflow-x-auto px-4 gap-5 scrollbar-none py-2">

          {categories.map((category) => {
            return (
              <button
                onClick={handleClick}
                key={category} value={category}
                className="btn btn-primary whitespace-nowrap"
              >
                {category}
              </button>
            );
          })}

        </div>
      </Wrapper>
    </div>
  );
};

export default Category;