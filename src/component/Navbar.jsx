import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const { setNews, fetchNews } = useNewsContext();

  const searchNews = async () => {
    if (!searchValue) return;

    try {
      const data = await fetchNews(`/everything?q=${searchValue}`);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white ${className}`}>
      <Wrapper>
        <div className="navbar shadow-sm">

          <div className="flex-1">
            <a className="btn btn-ghost text-xl text-white">News App</a>
          </div>

          <div className="flex gap-2">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="text"
              placeholder="Search"
              className="input input-bordered text-black w-24 md:w-auto"
              onKeyDown={(e) => {
                if (e.key === "Enter") searchNews();
              }}
            />

            <button
              onClick={searchNews}
              className="btn bg-white text-blue-600 border-none"
            >
              Search
            </button>
          </div>

        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;