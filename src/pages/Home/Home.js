import { Link } from 'react-router-dom';

import Header from '../../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <h1>ANIME MANGA DATABASE</h1>
      <Link to="/anime-search"><button>ANIME</button></Link>
      <Link to="/manga-search"><button>MANGA</button></Link>
    </div>
  )
}

export default Home;