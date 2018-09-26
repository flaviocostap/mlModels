// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { features: [] };
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const features = await res.json();
      this.setState({ features });
    } catch (e) {
      console.log(e);
    }


  }

  render() {
    return (
      <div>
        {this.state.features.map(item => (
          <div key={item.nome}>
            <h1>{item.nome}</h1>
            <span>{item.idade}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
