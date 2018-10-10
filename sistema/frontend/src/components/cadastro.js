import React, { Component } from 'react';
import './cadastro.css'
class Cadastro extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)

    return (
      <div>

      <div className="col-11 offset-1 container-fluid">
        <form onSubmit={this.props.submituserRegistrationForm} >
          <div className="col-sm-10 form-group">
            <label for="exampleInputNome" className="col-form-label">Nome</label>
            <div >
              <input type="text" className="form-control" id="inputNome" value={this.props.inputNome} onChange={this.props.handleNameChange} placeholder="Nome completo" ></input>
              {this.props.validator.message('inputNome', this.props.inputNome, 'required|alpha')}

            </div>
          </div>
          <div className="col-sm-10 form-group">
            <label for="inputIdade" className=" col-form-label">Idade</label>
            <div className="">
              <input type="number" className="form-control" value={this.props.inputIdade} onChange={this.props.handleIdadeChange} id="inputIdade" placeholder="idade"></input>
            </div>
          </div>
          <div className="col-sm-10 form-group">
            <label className="col-form-label" for="inputSexo">Sexo</label>
            <select className="col-sm-1 form-control" id="fromControlSelect" value={this.props.selectSexo} onChange={this.props.handleSexoChange}>
              <option>M</option>
              <option>F</option>
            </select>
          </div>
          <div className="col-sm-10 form-group">
            <form>
              <label className="col-md-offset-2" for="FormControlFile">Insira o arquivo EMG aqui!</label>
              <input name="dado" type="file" onChange={this.props.fileSelectedHandler} className="col-sm-4 form-control-file" id="edfFormControlFile"></input>
            </form>
          </div>
          <div className="col-sm-10 form-group">
            <button type="submit" class=" btn btn-primary">Enviar</button>
          </div>

        </form>
      </div>
      <div id="main-registration-container">
        <div id="register">
          <h3>Cadastro de paciente</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.props.submituserRegistrationForm} >

            <label>Nome</label>
            <input className="form-control" type="text" placeholder="nome completo" name="nome" value={this.props.fields.nome} onChange={this.props.handleChange} />
            <div className="errorMsg">{this.props.errors.nome}</div>

            <label>Idade</label>
            <input type="number" className="form-control" value={this.props.fields.idade} onChange={this.props.handleChange} id="inputIdade" name="idade" placeholder="idade"></input>
            <div className="errorMsg">{this.props.errors.idade}</div>

            <label>Sexo</label>
            <select className="col-sm-10 form-control" id="fromControlSelect" name="sexo" value={this.props.fields.sexo} onChange={this.props.handleChange}>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            <div className="errorMsg">{this.props.errors.sexo}</div>

            <form>
              <label className="col-md-offset-2" for="FormControlFile">Insira o arquivo EMG aqui!</label>
              <input name="dado" type="file"  onChange={this.props.fileSelectedHandler} className="col-sm-4 form-control-file" id="edfFormControlFile"></input>
            </form>

            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default Cadastro
