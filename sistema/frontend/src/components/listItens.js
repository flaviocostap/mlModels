import React, { Component } from 'react';
import axios from 'axios'

class ListItens extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        try {
            let features
            axios.get('http://127.0.0.1:8000/api/').then(res => {
                features = res.data.map(item => {
                    if (item.arquivar === false) {
                        if (item !== undefined)
                            return item
                    }
                });
                features = features.filter(item => {
                    return item !== undefined
                })
                console.log(features)
                this.props.handleFeatures(features)
            })
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div class="container">
                <ul className="list-group list-group-flush">
                    {
                        this.props.features.map(item => (
                            <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                nome: <h2 class="mt-2">{item.nome}</h2>
                                idade: <h2>{item.idade}</h2>
                                sexo: <h2>{item.sexo}</h2>
                                resultado: <h2>{item.resultado}</h2>
                                id: <h2>{item.id}</h2>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)}>Editar</button>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.props.arquivarUser(item)}>Arquivar</button>
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

export default ListItens