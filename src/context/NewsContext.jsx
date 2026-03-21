import { createContext, useState, useContext } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);


    const fetchNews = async (url = "/everything?q=India") => {
        try {
            const response = await api.get(
                `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
                // `${url}&apiKey=ee3dd287de0c43f8b90a845859acc4ed`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching news:", error);
            return { articles: [] }; // ✅ prevent crash
        }
    };

    const value = {
        news,
        setNews,
        fetchNews
    };

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => {
    const context = useContext(NewsContext);

    if (!context) {
        throw new Error("useNewsContext must be used inside NewsContextProvider");
    }

    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { NewsContextProvider, useNewsContext };