import React from 'react'

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt={anime.title} />
          <div className="anime-title">
            <h3>{anime.title}</h3>
          </div>
        </figure>
      </a>
    </article>
  )
}

export default AnimeCard
