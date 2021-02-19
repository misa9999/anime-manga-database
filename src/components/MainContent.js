import AnimeCard from './AnimeCard'

function MainContent({ handleSearch, search, setSearch, animeList}) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={handleSearch}>
          <input 
            type="search"
            placeholder="Search for an anime..."
            required
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {animeList.map(anime => (
          <AnimeCard
            anime={anime}
            key={anime.mal_id}
          />
        ))}
      </div>
    </main>
  )
}

export default MainContent