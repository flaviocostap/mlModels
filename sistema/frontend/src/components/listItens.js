import React, { Component } from 'react';
import axios from 'axios'

class ListItens extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.idFeature !== this.props.idFeature) {
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
                    this.props.handleFeatures(features)
                })
            } catch (e) {
                console.log(e);
            }
        }
    }
    render() {
        let features
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
                <div class="table-responsive">
                    <table class="table">
                        <caption>Usuários</caption>
                        <thead>
                            <tr>
                                <th scope="col">Nº</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Resultado</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                features.map(
                                    item => {
                                        if (item.arquivar === this.props.exibirArquivados) {
                                            return (
                                                <tr>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.nome}</td>
                                                    <td>{item.idade}</td>
                                                    <td>{item.sexo}</td>
                                                    <td>{item.result === null ? <button type="button" class="btn btn-outline-info" onClick={() => this.props.avaliarPatient(item)}>Avaliar</button> : item.result}</td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)} data-toggle="modal" data-target="#editModal">Editar</button>
                                                            <button type="button" class="btn btn-outline-danger" hidden={this.props.exibirArquivados} onClick={() => this.props.arquivarUser(item)}>Arquivar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListItens