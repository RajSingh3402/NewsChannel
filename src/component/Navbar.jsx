import React, { useState } from "react";
import { useNewsContext } from "../context/NewsContext";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const { setNews, fetchNews } = useNewsContext();

  const searchNews = async () => {
    if (!searchValue.trim()) return;

    try {
      setLoading(true);
      const data = await fetchNews(`/everything?q=${searchValue}`);
      setNews(data?.articles || []);
    } catch (error) {
      console.error(error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 text-white shadow-xl">
      
      <div className="px-6 md:px-16 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-extrabold tracking-wide">
          NewsPulse
        </h1>

        {/* Search */}
        <div className="flex items-center gap-2">
          
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchNews()}
            placeholder="Search..."
            className="
              px-3 py-1 rounded-full 
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white placeholder-white/70
              focus:bg-white focus:text-gray-800
              focus:placeholder-gray-400
              focus:ring-2 focus:ring-purple-300
              outline-none transition-all 
              w-28 sm:w-40 md:w-52
              text-sm
            "
          />

          <button
            onClick={searchNews}
            className="
              px-3 py-1 rounded-full
              bg-white text-purple-700 text-sm font-semibold
              hover:bg-purple-100
              active:scale-95
              transition-all shadow-md
            "
          >
            {loading ? "..." : "Search"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;