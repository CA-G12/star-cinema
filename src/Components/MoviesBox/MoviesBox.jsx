import React, { Component } from 'react';

import MovieCard  from './MoviesCard/MovieCard.jsx';
import Spinner from './MoviesCard/Spinner/Spinner.js';

import { getData } from '../../utils/getData.js';

import './MoviesBox.css'

export default class MoviesBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      err: '',
      isReturned: false,
      limit: 20,
    };
    this.defaultFetch = () => {
      this.setState((prevState, prevProps) => ({ ...prevState, isReturned: !prevState.isReturned }));
      getData(`https://yts.mx/api/v2/list_movies.jsonp?limit=${this.state.limit}`)
      .then((movies) => {
        this.setState({ data: movies.data.movies });
        this.setState((prevState, prevProps) => ({ ...prevState, isReturned: !prevState.isReturned }));
      })
      .catch((err) => this.setState((prevState, prevProps) => ({ ...prevState, err })));
    }
  }

  componentDidMount() {
    this.defaultFetch();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (!this.props.search && this.state.limit !== prevState.limit) {
      this.defaultFetch();
    }

    if (this.props.search !== prevProps.search || this.state.limit !== prevState.limit) {
      this.setState((prevState, prevProps) => ({ ...prevState, isReturned: !prevState.isReturned }));
      getData(`https://yts.mx/api/v2/list_movies.jsonp?query_term=${this.props.search}&limit=40`)
        .then((movie) => {
          this.setState((prevState, prevProps) => ({ data: movie.data.movies }));
          this.setState((prevState, prevProps) => ({ ...prevState, isReturned: !prevState.isReturned }));
        })
        .catch((err) => this.setState((prevState, prevProps) => ({ ...prevState, err })));
    }
  }

  render() {
    if (this.state.isReturned) {
      return <Spinner />
    }
    return !this.state.data ?
    <div className='fall-back'>Sorry, the term you entered has no matching data!</div> :
    (
    <>
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
      <button 
          className='load-more-data'
          onClick={
            (e) => {
              this.setState((prevState, prevProps) => {
                return { ...prevState, limit: prevState.limit + 20 };
              })
            }
          }
        >
          Load more movies
        </button>
      </>
      )
  }
}
