import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Loading from "../../components/Loading";

import animationData from "../../lottie/menhera-chan-2.json";

import { motion } from "framer-motion";
import { animationOne } from "../../animations/index";

import "../../assets/scss/main.css";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
          variants={animationOne}
        >
          <Header value={"header-home"} name={"Anime&Manga"} />
          <div className="button-container">
            <Link to="/anime-search" className="button-anime">
              ANIME
            </Link>
            <Link to="/manga-search" className="button-manga">
              MANGA
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Home;
