// App.js
import React, { Component } from 'react';
import NavBar from './components/template/navbar'
import HomePage from './components/home/homePage'
import Footer from './components/template/footer'
import Cadastro from './components/cadastro/cadastro'
import Editar from './components/home/editar'
import axios from 'axios'

const POST = 1
const PUT = 0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [],
      checkedAnexarArquivo: false,
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
    this.avaliarPatient = this.avaliarPatient.bind(this);
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
        this.handleFeatures(features)
      })
    } catch (e) {
      console.log(e);
    }
  }
  handlecheckedAnexarArquivo = name => event => {
    this.setState({ [name]: event.target.checked });
  };

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
    }
  }
  async submitEditUser(e) {
    e.preventDefault()
    console.log(this.state.checkedAnexarArquivo)
    if (this.state.checkedAnexarArquivo) {
      if (this.validateForm()) {
        this.postSsemgfile(0)
      }
    } else {
      if (this.validateForm()) {
        this.puttUser(this.state.fields.id)
      }
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
      if (!fields["nome"].match(/^[a-zA-Zçãõẽáéíóú ]*$/)) {
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
  avaliarPatient(item) {
    axios.get('http://127.0.0.1:8000/cls/' + item.id)
      .then(res => {
        this.setState({ features: res.data })
      })
      .catch(error => {
        console.log(error)
      });
  }
  arquivarUser(item) {
    item.arquivar = true
    const r = window.confirm("Deseja realmente arquivar esse usuário?"); if (r == true) {
      axios.put('http://127.0.0.1:8000/atualizar/' + item.id + '/', item)
        .then(res => {
          this.setState({ idFeature: res.data.id })
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
  postUser() {
    axios.post('http://127.0.0.1:8000/', this.state.fields)
      .then(res => {
        this.setState({ idFeature: res.data.id })
        let closeCadastroModal = document.getElementById('closeCadastroModal')
        closeCadastroModal.click();
        if (res.data.id) {
          this.setState({
            selectedFile: null,
            fields: { sexo: 'M' },
            errors: {},
            checkedAnexarArquivo: false,
          })
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
        let closeEditModal = document.getElementById('closeEditModal')
        closeEditModal.click();

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
        <NavBar exibirArquivados={this.state.exibirArquivados} handleBotaoHome={this.handleBotaoHome} handleBotaoArquivados={this.handleBotaoArquivados} features={this.state.features} handlePesquisa={this.handlePesquisa}></NavBar>
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
          handlecheckedAnexarArquivo={this.handlecheckedAnexarArquivo}
          checkedAnexarArquivo={this.state.checkedAnexarArquivo}
          submitEditUser={this.submitEditUser}
          fileSelectedHandler={this.fileSelectedHandler}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          selectedFile={this.state.selectedFile}
          fields={this.state.fields}
          errors={this.state.errors}
        ></Editar>
        <HomePage
          idFeature={this.state.idFeature}
          exibirArquivados={this.state.exibirArquivados}
          pesquisa={this.state.pesquisa}
          features={this.state.features}
          arquivarUser={this.arquivarUser}
          updatePatient={this.updatePatient}
          avaliarPatient={this.avaliarPatient}
          handleFeatures={this.handleFeatures}>
        </HomePage>
        <Footer></Footer>
      </div >
    );
  }
}

export default App;
