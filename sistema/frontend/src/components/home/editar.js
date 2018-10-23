import React, { Component } from 'react';
import '../../css/cadastro.css'

class Editar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">Editar paciente</h5>
                <button id="closeEditModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                <form method="post" name="userRegistrationForm" onSubmit={this.props.submitEditUser} >

                  <label>Nome</label>
                  <input className="form-control" type="text" placeholder="nome completo" name="nome" value={this.props.fields.nome} onChange={this.props.handleChange} />
                  <div className="errorMsg">{this.props.errors.nome}</div>

                  <label>Idade</label>
                  <input type="number" min="1" max="130" className="form-control" value={this.props.fields.idade} onChange={this.props.handleChange} id="inputIdade" name="idade" placeholder="idade"></input>
                  <div className="errorMsg">{this.props.errors.idade}</div>

                  <label>Sexo</label>
                  <select className="col-sm-10 form-control" id="fromControlSelect" name="sexo" value={this.props.fields.sexo} onChange={this.props.handleChange}>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                  </select>
                  <div className="errorMsg">{this.props.errors.sexo}</div>
                  <form>
                    <label className="col-md-offset-2" for="FormControlFile">Insira o arquivo EMG aqui!</label>
                    <input name="dado" type="file" onChange={this.props.fileSelectedHandler} className="form-control-file" id="edfFormControlFile"></input>
                    <div className="errorMsg">{this.props.errors.fileSelected}</div>
                  </form>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Cancelar</button>
                    <button type="submit" className="btn btn-outline-primary" value="Register" >Salvar alterações</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Editar
