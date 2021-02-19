import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

import Loading from "../../components/Loading";

import animationData from "../../lottie/menhera-chan-1.json";

import { motion } from "framer-motion";
import { animationTwo, transition } from "../../animations/index";

function MangaSearch() {
  const [mangaList, setMangaList] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getTopManga = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/manga/1/bypopularity`
    ).then((res) => res.json());

    setTopManga(temp.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchManga(search);
  };

  const fetchManga = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setMangaList(temp.results);
  };

  useEffect(() => {
    getTopManga();
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
          animate="in"
          exit="out"
          variants={animationTwo}
          transition={transition}
        >
          <Header name={"Manga"} />
          <div className="content-wrap">
            <Sidebar topManga={topManga} />
            <MainContent
              handleSearch={handleSearch}
              search={search}
              setSearch={setSearch}
              mangaList={mangaList}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default MangaSearch;
