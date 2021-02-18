import { useState, useEffect } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
