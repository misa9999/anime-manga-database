import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import "../../assets/scss/main.css";

import Lottie from "react-lottie";
import animationData from "../../lottie/menhera-chan-1.json";

function Home() {
  const [loading, setLoading] = useState(false);

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
