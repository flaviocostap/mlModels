import React, { Component } from 'react';
import axios from 'axios'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        try {
            axios.get('http://127.0.0.1:8000/api/').then(res => {
                const features = res.data;
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
                    {this.props.features.map(item => (
                        <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            nome: <h2 class="mt-2">{item.nome}</h2>
                            idade: <h2>{item.idade}</h2>
                            sexo: <h2>{item.sexo}</h2>
                            resultado: <h2>{item.resultado}</h2>
                            <div class="btn-group">
                                {/* <button type="button" class="btn btn-outline-info">Detalhes</button> */}
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                <button type="button" class="btn btn-outline-danger">Arquivar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HomePage