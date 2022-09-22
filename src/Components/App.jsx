import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import MoviesBox from './MoviesBox/MoviesBox';
import HowItWorks from './HowItWorks/HowItWorks';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state  = {
      search: '',
      howItWorks: false,
    };
    this.setSearch = (val) => {
      this.setState((prevState, prevProps) => ({ ...prevState, search: val }));
    };
    this.setHowItWorks = () => {
      this.setState((prevState, prevProps) => ({ ...prevState, howItWorks: !prevState.howItWorks }));
    }
  }

  render() {
    return (
      <div className='app'>
        <Header search={this.state.search} setSearch={this.setSearch} setHowItWorks={this.setHowItWorks} />
        { this.state.howItWorks && <HowItWorks setHowItWorks={this.setHowItWorks} /> }
        <MoviesBox search={this.state.search} />
      </div>
    )
  }
}
