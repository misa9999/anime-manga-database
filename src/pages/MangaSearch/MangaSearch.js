import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

import Lottie from "react-lottie";
import animationData from "../../lottie/menhera-chan-2.json";

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
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  const LoadingAnimation = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="loading">
        <Lottie options={defaultOptions} height={250} width={250} />
      </div>
    );
  };

  return (
    <>
      {loading ? (
        LoadingAnimation()
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default MangaSearch;
