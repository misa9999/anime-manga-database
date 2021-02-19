import { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainContent from '../../components/MainContent'

import '../../assets/scss/main.css';

import Lottie from "react-lottie";
import animationData from "../../lottie/menhera-chan-2.json";

function AnimeSearch() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());

    setTopAnime(temp.top.slice(0, 5));
  }

  const handleSearch = e => {
    e.preventDefault();

    fetchAnime(search)
  }

  const fetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())

    setAnimeList(temp.results)
  }

  useEffect(() => {
    getTopAnime();
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
  }

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
      <div id="progressbar"></div>
      <div id="scrollPath"></div>
      <Header name={'Anime'} />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent 
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
    )}
    </>
  )
}

export default AnimeSearch;