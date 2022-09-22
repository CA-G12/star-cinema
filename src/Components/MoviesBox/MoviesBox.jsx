import React, { Component } from 'react';

import MovieCard  from './MoviesCard/MovieCard.jsx';

import { getData } from '../../utils/getData.js';

import './MoviesBox.css'

export default class MoviesBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      err: '',
    };
  }

  componentDidMount() {
    getData('https://yts.mx/api/v2/list_movies.jsonp?limit=20')
    .then((movies) => this.setState({ data: movies.data.movies }))
    .catch((err) => this.setState((prevState, prevProps) => ({ ...prevState, err })));
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.search !== prevProps.search) {
      getData(`https://yts.mx/api/v2/list_movies.jsonp?query_term=${this.props.search}`)
        .then((movie) => this.setState((prevState, prevProps) => {
          return { data: movie.data.movies }
        }))
        .catch((err) => this.setState((prevState, prevProps) => ({ ...prevState, err })));
    }
  }

  render() {
    return !this.state.data ?
    <div className='fall-back'>Sorry, the term you entered has no matching data!</div> :
    (
    <section className='movies-container'>
      {
      this.state.data.map((movie)=> {
        return <MovieCard
          key={movie.id}
          poster={movie.medium_cover_image}
          title = {movie.title}
          url={movie.url}
          rating={movie.rating}
          type={movie.genres[0]} 
        />
      })
      }
    </section>
      )
  }
}
