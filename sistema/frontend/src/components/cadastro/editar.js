
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleChange } from '../../actions/fieldActions'

import '../../css/cadastro.css'

class Editar extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div id="main-registration-container">
                    <div id="register">
                        <h3>Editar paciente</h3>
                        {/* <form method="post" name="userRegistrationForm" onSubmit={this.props.submitEditUser} >

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
                            <input type="submit" className="button" value="Register" />
                        </form> */}
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ handleChange }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        fields: state.fields,
        erros: state.errors,
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(Editar);
