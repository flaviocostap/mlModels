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
      inputDado: null,
      selectSexo: 'M',
      selectedFile: null,
      idFeature: null,
      validator: new SimpleReactValidator(),
    };

    this.handleFeatures = this.handleFeatures.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIdadeChange = this.handleIdadeChange.bind(this);
    this.handleSexoChange = this.handleSexoChange.bind(this);
    this.handleInputDado = this.handleInputDado.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
  }

  fileSelectedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  postUser() {
    axios.post('http://127.0.0.1:8000/', {
      nome: this.state.inputNome,
      idade: this.state.inputIdade,
      sexo: this.state.selectSexo,
      id_semg: this.state.inputDado,
    })
      .then(res => {
        this.setState({ idFeature: res.data.id })
      })
      .catch(error => {
        console.log(error)
      });
  }
  postSsemgfile() {
    let url = 'http://127.0.0.1:8000/semgfile/'
    const fd = new FormData();
    fd.append('dado', this.state.selectedFile, this.state.selectedFile.name)
    axios.post(url, fd)
      .then(response => {
        if (response.data.id) {
          this.setState({ inputDado: response.data.id })
          this.postUser()
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.postSsemgfile()
  }

  handleFeatures(evento) {
    this.setState({ features: evento });
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
  handleInputDado(event) {
    this.setState({ inputDado: event.target.files[0] })
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Cadastro handleSubmit={this.handleSubmit}
          handleNameChange={this.handleNameChange}
          handleIdadeChange={this.handleIdadeChange}
          handleSexoChange={this.handleSexoChange}
          handleInputDado={this.handleInputDado}
          fileSelectedHandler={this.fileSelectedHandler}
          inputNome={this.state.inputNome}
          inputDado={this.state.inputDado}
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

    // event.preventDefault()
    // // axios.post('http://127.0.0.1:8000/', {
    // //   nome: this.state.inputNome,
    // //   idade: this.state.inputIdade,
    // //   sexo: this.state.selectSexo,
    // // })
    // //   .then(res => {
    // //     console.log(res.data)
    // //     this.setState({ idFeature: res.data.id })
    // //   })

    // let formData = new FormData();
    // formData.append('file', this.state.inputDado);

    // axios.post('http://127.0.0.1:8000/semgfile/',
    //   formData,
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }
    // ).then(function () {
    //   console.log('SUCCESS!!');
    // })
    //   .catch(function () {
    //     console.log('FAILURE!!');
    //     console.log(formData);
    //   });