import React, { Component } from 'react';

import MovieCard  from './MoviesCard/MovieCard.jsx';

export default class MoviesBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
    };
    this.search = props.search;
  }

  render() {
    return (
    <section className='movies-container'>
      {
        // console.log();
      this.state.data.map((movie)=> (
        <MovieCard
          key={movie.id}
          poster={movie.medium_cover_image}
          title = {movie.title}
          url={movie.url}
          rating={movie.rating}
          type={movie.genres[0]} 
        />
      ))
      }
    </section>
      )
  }
}
