import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";

import Loading from '../../components/Loading';

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
    }, 1000);
  }, []);

  let progress = document.getElementById("progressbar");
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div id="progressbar"></div>
          <div id="scrollPath"></div>
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
