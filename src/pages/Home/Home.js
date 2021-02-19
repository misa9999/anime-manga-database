import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Loading from '../../components/Loading';

import animationData from '../../lottie/menhera-chan-2.json'


import "../../assets/scss/main.css";


function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <Loading animationData={animationData} />
      ) : (
        <div className="home-container">
          <Header value={"header-home"} name={"Anime&Manga"} />
          <div className="button-container">
            <Link to="/anime-search" className="button-anime">
              ANIME
            </Link>
            <Link to="/manga-search" className="button-manga">
              MANGA
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
