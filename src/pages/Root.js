import Home from '../pages/Home/Home'
import AnimeSearch from '../pages/AnimeSearch/AnimeSearch'
import MangaSearch from '../pages/MangaSearch/MangaSearch'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anime-search" component={AnimeSearch} />
        <Route path="/manga-search" component={MangaSearch} />
      </Switch>
    </Router>
  )
}

export default Root;