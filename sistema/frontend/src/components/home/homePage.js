import React, { Component } from 'react';
import ListItens from './listItens'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let features = this.props.features
        // if (this.props.pesquisa === null) {
        //     features = this.props.features
        // } else {
        //     features = this.props.features.filter(ap => {
        //         if (ap.id === this.props.pesquisa.value) {
        //             return ap
        //         }
        //     })
        // }

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
                                {/* <div class="btn-group">
                                    <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)}>Editar</button>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.props.arquivarUser(item)}>Arquivar</button>
                                </div> */}

                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default HomePage