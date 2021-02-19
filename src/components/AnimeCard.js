import React from 'react'

function AnimeCard({ anime, manga }) {
  return (
    <article className="anime-card">
      {anime ? (
              <a href={anime.url} target="_blank" rel="noreferrer">
              <figure>
                <img src={anime.image_url} alt={anime.title} />
                <div className="anime-title">
                  <h3>{anime.title}</h3>
                </div>
              </figure>
            </a>
      ) : (
        <a href={manga.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={manga.image_url} alt={manga.title} />
          <div className="anime-title">
            <h3>{manga.title}</h3>
          </div>
        </figure>
      </a>
      )}
    </article>
  )
}

export default AnimeCard
