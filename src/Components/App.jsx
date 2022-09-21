import React, { Component } from 'react';

import Header from './Header/Header';

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
      </div>
    )
  }
}
