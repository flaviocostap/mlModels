// App.js
import React, { Component } from 'react';
import NavBar from './components/navbar'
import HomePage from './components/homePage'
import Cadastro from './components/cadastro'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      selectedFile: null,
      idFeature: null,
      fields: { sexo: 'M' },
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFeatures = this.handleFeatures.bind(this)
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  async submituserRegistrationForm(e) {
    e.preventDefault()
    if (this.validateForm()) {
      this.postSsemgfile()
      alert('Cadastro realizado com sucesso!!')
      
    }

  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["nome"]) {
      formIsValid = false;
      errors["nome"] = "Insira um nome";
    }

    if (!fields["fileSelected"]) {
      formIsValid = false;
      errors["fileSelected"] = "Insira um arquivo com o formato 'edf'.";
    }

    if (typeof fields["fileSelected"] !== "undefined") {
      if (!fields["fileSelected"].match(/.[edf]{3}$/)) {
        formIsValid = false;
        errors["fileSelected"] = "Formato invalido";
      }
    }

    if (typeof fields["nome"] !== "undefined") {
      if (!fields["nome"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["nome"] = "Somente caracteres";
      }
    }

    if (!fields["idade"]) {
      formIsValid = false;
      errors["idade"] = "Insira a idade.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  fileSelectedHandler(event) {
    let selectedFile = event.target.files[0]
    if (selectedFile !== undefined) {
      this.setState({
        selectedFile: selectedFile
      })

      let fields = this.state.fields;
      fields['fileSelected'] = selectedFile.name
      this.setState({
        fields
      });
    }
  }

  postUser() {
    console.log(this.state.fields)
    axios.post('http://127.0.0.1:8000/', this.state.fields)
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
        console.log(response.data)
        if (response.data.id) {
          let fields = this.state.fields;
          fields['id_semg'] = response.data.id
          this.setState({ fields });
          this.postUser()
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  async handleSubmit(event) {
    //event.preventDefault()
    this.postSsemgfile()
  }

  handleFeatures(evento) {
    this.setState({ features: evento });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Cadastro
          handleSubmit={this.handleSubmit}
          submituserRegistrationForm={this.submituserRegistrationForm}
          handleChange={this.handleChange}
          fields={this.state.fields}
          errors={this.state.errors}
          fileSelectedHandler={this.fileSelectedHandler}
          selectedFile={this.state.selectedFile}
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