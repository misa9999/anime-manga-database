function Sidebar({ topAnime }) {
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
    </aside>
  )
}

export default Sidebar;