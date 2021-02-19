function Sidebar({ topAnime, topManga }) {
  return (
    <aside>
      <nav>
        <h3>Top anime</h3>
        {topAnime.map(anime => (
          <a 
            href={anime.url} 
            target="_blank" 
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
      <nav>
        <h3>Top manga</h3>
        {topManga.map(manga => (
          <a
            href={manga.url}
            target="_blank"
            key={manga.mal_id}
            rel="noreferrer"
          >
            {manga.title}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;