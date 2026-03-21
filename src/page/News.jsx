import { useEffect } from "react";
import Wrapper from "../component/Wrapper";
import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {

  const { news, setNews, fetchNews } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data?.articles || []);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>

        {news.map((newDetails, index) => {

          // ✅ image null ho to skip
          if (!newDetails.urlToImage) return null;

          return (
            <NewsCard key={index} details={newDetails} />
          );
        })}

      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {

  return (
    <div className="card bg-base-200 shadow-sm">
      <figure>
        <img
          className="w-full aspect-video object-cover"
          src={details.urlToImage}
          alt="news"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-2">
          {details.title}
        </h2>

        <p className="line-clamp-3">
          {details.description}
        </p>

        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => window.open(details.url)}
            className="btn bg-purple-700 hover:bg-purple-600 border-none text-white shadow-md active:scale-95 transition-all"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;