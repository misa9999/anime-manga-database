import Home from "../pages/Home/Home";
import AnimeSearch from "../pages/AnimeSearch/AnimeSearch";
import MangaSearch from "../pages/MangaSearch/MangaSearch";

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  let location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
        <Switch  location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/anime-search" component={AnimeSearch} />
          <Route path="/manga-search" component={MangaSearch} />
        </Switch>
      </AnimatePresence>
  );
};

export default Root;
