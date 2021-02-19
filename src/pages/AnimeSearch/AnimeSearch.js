import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import Loading from "../../components/Loading";

import animationData from "../../lottie/menhera-chan-1.json";

import { motion } from "framer-motion";
import { animationThree } from "../../animations/index";

import "../../assets/scss/main.css";

function AnimeSearch() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(temp.results);
  };

  useEffect(() => {
    getTopAnime();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading animationData={animationData} />
      ) : (
        <motion.div
          initial="out"
          animate="end"
          exit="out"
          variants={animationThree}
        >
          <Header name={"Anime"} />
          <div className="content-wrap">
            <Sidebar topAnime={topAnime} />
            <MainContent
              handleSearch={handleSearch}
              search={search}
              setSearch={setSearch}
              animeList={animeList}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default AnimeSearch;
