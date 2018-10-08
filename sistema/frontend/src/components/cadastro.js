import React, { Component } from 'react';

class Cadastro extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="col-11 offset-1 container-fluid">
        <form onSubmit={this.props.handleSubmit} >
          <div className="col-sm-10 form-group">
            <label for="exampleInputNome" className="col-form-label">Nome</label>
            <div >
              <input type="text" className="form-control" id="inputNome" value={this.props.inputNome} onChange={this.props.handleNameChange} placeholder="Nome completo" ></input>
              {/**********   This is where the magic happens     ***********/}
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
          {/* <div className="col-sm-10 form-group">
            <form>
              <label className="col-md-offset-2" for="FormControlFile">Insira o arquivo EMG aqui!</label>
              <input type="file" className="col-sm-4 form-control-file" id="edfFormControlFile"></input>
            </form>

          </div> */}
          <div className="col-sm-10 form-group">
          <button type="submit" class=" btn btn-primary">Enviar</button>
          </div>
          
        </form>
      </div>
    )
  }
}

export default Cadastro
