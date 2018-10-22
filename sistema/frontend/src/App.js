// App.js
import React, { Component } from 'react';
import NavBar from './components/navbar'
import HomePage from './components/homePage'
import Footer from './components/footer'
import Cadastro from './components/cadastro'
import Editar from './components/editar'
import axios from 'axios'

const POST = 1
const PUT = 0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      exibirArquivados: false,
      selectedFile: null,
      idFeature: null,
      fields: { sexo: 'M' },
      pesquisa: null,
      user: {},
      errorUser: {},
      errors: {},
    };

    this.handleBotaoArquivados = this.handleBotaoArquivados.bind(this);
    this.handleBotaoHome = this.handleBotaoHome.bind(this);
    this.arquivarUser = this.arquivarUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFeatures = this.handleFeatures.bind(this)
    this.handlePesquisa = this.handlePesquisa.bind(this)
    this.updatePatient = this.updatePatient.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    this.submitEditUser = this.submitEditUser.bind(this);
  }
  async componentDidMount() {
    try {
      let features
      axios.get('http://127.0.0.1:8000/api/').then(res => {
        features = res.data.map(item => {
          if (item !== undefined)
            return item
        });
        features = features.filter(item => {
          return item !== undefined
        })
        features = features.reverse()
        this.handleFeatures(features)
      })
    } catch (e) {
      console.log(e);
    }
  }

  handleFeatures(evento) {
    if (evento !== undefined)
      this.setState({ features: evento });
  }
  handlePesquisa(evento) {
    if (evento.length === 0) {
      this.setState({ pesquisa: null })
    } else
      this.setState({ pesquisa: evento })
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
      this.postSsemgfile(1)
      alert('Cadastro realizado com sucesso!!')
    }
  }
  async submitEditUser(e) {
    e.preventDefault()
    if (this.validateForm()) {
      this.postSsemgfile(0)
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
  updatePatient(item) {
    let fields = {
      id: item.id,
      nome: item.nome,
      idade: item.idade,
      sexo: item.sexo
    }
    this.setState({ fields })
  }
  handleBotaoArquivados() {
    this.setState({ exibirArquivados: true })
  }
  handleBotaoHome() {
    this.setState({ exibirArquivados: false })
  }
  arquivarUser(item) {
    item.arquivar = true
    axios.put('http://127.0.0.1:8000/atualizar/' + item.id + '/', item)
      .then(res => {
        if (res.status === 200) {
          window.location.reload()
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
  postUser() {
    axios.post('http://127.0.0.1:8000/', this.state.fields)
      .then(res => {
        this.setState({ idFeature: res.data.id })
        if (res.status === 201) {
          window.location.reload()
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
  puttUser(id) {
    axios.put('http://127.0.0.1:8000/atualizar/' + id + '/', this.state.fields)
      .then(res => {
        this.setState({ idFeature: res.data.id })
        if (res.status === 200) {
          window.location.reload()
        }
      })
      .catch(error => {
        console.log(error)
      });
  }
  postSsemgfile(tipo) {
    let url = 'http://127.0.0.1:8000/semgfile/'
    const fd = new FormData();
    fd.append('dado', this.state.selectedFile, this.state.selectedFile.name)
    axios.post(url, fd)
      .then(response => {
        if (response.data.id) {
          let fields = this.state.fields;
          fields['id_semg'] = response.data.id
          this.setState({ fields });
          if (tipo === POST)
            this.postUser()
          else if (tipo === PUT)
            this.puttUser(this.state.fields.id)
        }
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <NavBar handleBotaoHome={this.handleBotaoHome} handleBotaoArquivados={this.handleBotaoArquivados} features={this.state.features} handlePesquisa={this.handlePesquisa}></NavBar>
        <Cadastro
          submituserRegistrationForm={this.submituserRegistrationForm}
          fileSelectedHandler={this.fileSelectedHandler}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          selectedFile={this.state.selectedFile}
          fields={this.state.fields}
          errors={this.state.errors}
        ></Cadastro>
        <Editar
          submitEditUser={this.submitEditUser}
          fileSelectedHandler={this.fileSelectedHandler}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          selectedFile={this.state.selectedFile}
          fields={this.state.fields}
          errors={this.state.errors}
        ></Editar>
        <HomePage
          exibirArquivados={this.state.exibirArquivados}
          arquivarUser={this.arquivarUser}
          updatePatient={this.updatePatient}
          pesquisa={this.state.pesquisa}
          features={this.state.features}>
        </HomePage>
        <Footer></Footer>
      </div >
    );
  }
}

export default App;
