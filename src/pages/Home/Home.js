import { Link } from "react-router-dom";

import Header from "../../components/Header";
import "../../assets/scss/main.css";

function Home() {
  return (
    <div className="home-container">
      <Header value={'header-home'} name={'Anime&Manga'} />
      <div className="button-container">
        <Link to="/anime-search" className="button-anime">
          ANIME
        </Link>
        <Link to="/manga-search" className="button-manga">
          MANGA
        </Link>
      </div>
    </div>
  );
}

export default Home;
