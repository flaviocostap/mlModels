// App.js
import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

import NavBar from './components/template/navbar'
import HomePage from './components/home/homePage'
import Footer from './components/template/footer'
import Cadastro from './components/cadastro/cadastro'
import Editar from './components/home/editar'



const POST = 1
const PUT = 0

class App extends Component {

  handlePesquisa(evento) {
    console.log(evento)
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
  arquivarUser(item) {
    item.arquivar = true
    axios.put('http://127.0.0.1:8000/atualizar/' + item.id + '/', item)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      });
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
  puttUser(id) {
    axios.put('http://127.0.0.1:8000/atualizar/' + id + '/', this.state.fields)
      .then(res => {
        this.setState({ idFeature: res.data.id })
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
        console.log(response.data)
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
        {/* <NavBar features={this.state.features} handlePesquisa={this.handlePesquisa}></NavBar> */}
        {/*<Cadastro
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
        ></Editar> */}
        <HomePage
          // arquivarUser={this.arquivarUser}
          // updatePatient={this.updatePatient}
          // pesquisa={this.state.pesquisa}
          features={this.props.features}
          >
        </HomePage>
        <Footer></Footer>
      </div >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    features: state.features
  }
}

export default connect(mapStateToProps)(App);