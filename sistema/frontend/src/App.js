// App.js
import React, { Component } from 'react';
import NavBar from './components/navbar'
import HomePage from './components/homePage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { features: [] };

    this.handleFeatures = this.handleFeatures.bind(this)
  }

  handleFeatures(evento) {
    this.setState({ features : evento });
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <HomePage features={this.state.features} handleFeatures={this.handleFeatures}></HomePage>
      </div >

    );
  }
}

export default App;
