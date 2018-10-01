// App.js
import React, { Component } from 'react';
import NavBar from './components/navbar'
import HomePage from './components/homePage'
import Cadastro from './components/cadastro'
import SimpleReactValidator from 'simple-react-validator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      inputNome: null,
      inputIdade: 0,
      selectSexo: 'M',
      inputDado: [],
      validator : new SimpleReactValidator(),

    };

    this.handleFeatures = this.handleFeatures.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIdadeChange = this.handleIdadeChange.bind(this);
    this.handleSexoChange = this.handleSexoChange.bind(this);
  }

  handleFeatures(evento) {
    this.setState({ features: evento });
  }

  handleSubmit(event)  {
    if( this.state.validator.allValid() ){
      alert('You submitted the form and stuff!');
    } else {
      this.state.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  }

  handleNameChange(event) {
    this.setState({ inputNome: event.target.value });
  }

  handleIdadeChange(event) {
    this.setState({ inputIdade: event.target.value });
  }

  handleSexoChange(event) {
    this.setState({ selectSexo: event.target.value });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Cadastro handleSubmit={this.handleSubmit}     
        handleNameChange={this.handleNameChange}
        handleIdadeChange={this.handleIdadeChange}
        handleSexoChange={this.handleSexoChange}
        inputNome={this.state.inputNome}
        selectSexo={this.state.selectSexo}
        inputIdade={this.state.inputIdade}
        validator={this.state.validator}
        ></Cadastro>
        <HomePage features={this.state.features} handleFeatures={this.handleFeatures}></HomePage>
      </div >

    );
  }
}

export default App;
