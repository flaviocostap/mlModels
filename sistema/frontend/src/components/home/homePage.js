import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import { changePesquisa } from '../../actions/pesquisaActions'
import { updatePatient } from '../../actions/fieldActions'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    constructor(props) {
        super(props)
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

    render() {
        let features = this.props.features
        if (this.props.pesquisa === null) {
            features = this.props.features
        } else {
            features = this.props.features.filter(ap => {
                if (ap.id === this.props.pesquisa.value) {
                    return ap
                }
            })

        }
        return (
            <div class="container">
                <ul className="list-group list-group-flush">
                    {
                        features.map(item => (
                            <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                nome: <h2 class="mt-2">{item.nome}</h2>
                                idade: <h2>{item.idade}</h2>
                                sexo: <h2>{item.sexo}</h2>
                                resultado: <h2>{item.resultado}</h2>
                                id: <h2>{item.id}</h2>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)}>Editar</button>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.arquivarUser(item)}><Link to="/" /> Arquivar</button>
                                </div>

                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updatePatient, changePesquisa }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        features: state.features,
        fields: state.fields,
        pesquisa: state.pesquisa,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);