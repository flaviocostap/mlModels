// App.js
import React, { Component } from 'react';
import NavBar from './components/navbar'
import HomePage from './components/homePage'
import Cadastro from './components/cadastro'
import SimpleReactValidator from 'simple-react-validator'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      inputNome: null,
      inputIdade: 0,
      selectSexo: 'M',
      inputDado: [],
      idFeature: null,
      validator: new SimpleReactValidator(),
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

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/', {
      nome: this.state.inputNome,
      idade: this.state.inputIdade,
      sexo: this.state.selectSexo,
    })
      .then(res => {
        console.log(res.data)
        this.setState({ idFeature: res.data.id })
      })
    // axios.post('http://127.0.0.1:8000/feature/'+this.state.idFeature, this.state.inputDado, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
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
        <div className="row">
          <div className="col-10 offset-1 informacoes mt-3">
            <h4 className="informacoes-titulo"> Informações</h4>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              </p>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
              </p>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
