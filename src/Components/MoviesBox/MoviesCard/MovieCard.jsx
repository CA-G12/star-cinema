import React from 'react';
import { FaStar } from 'react-icons/fa';

import './MoviesCard.css'

export default function MovieCard(props) {
  const { poster, title, url, rating, type } = props;

  return (
    <section className='movie-card'>
      <img 
        src={poster}
        alt='movie poster'
        className='movie-poster'
      />
      <h1 className='movie-link'><a href={url} target='_blank' rel="noreferrer">{title}</a></h1>
      <section className='inner-section'>
        <h3 className='type'>{type}</h3>
        <section className='start-section'>
          <FaStar icon='star-icon' />
          <p className='rating'>{rating}</p>
        </section>
      </section>
    </section>
  )
}
