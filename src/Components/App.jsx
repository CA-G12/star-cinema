import React, { Component } from 'react';

import Header from './Header/Header';
import MoviesBox from './MoviesBox/MoviesBox'

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state  = {
      search: '',
    };
    this.setSearch = (val) => {
      this.setState({ search: val });
    };
  }

  render() {
    return (
      <div className='app'>
        <Header search={this.state.search} setSearch={this.setSearch} />
        <MoviesBox search={this.state.search} />
      </div>
    )
  }
}
