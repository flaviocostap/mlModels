import React, { Component } from 'react';
import ListItens from './listItens'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListItens
                desarquivarUser={this.props.desarquivarUser}
                handleFeatures={this.props.handleFeatures}
                idFeature={this.props.idFeature}
                avaliarPatient={this.props.avaliarPatient}
                exibirArquivados={this.props.exibirArquivados}
                pesquisa={this.props.pesquisa}
                features={this.props.features}
                updatePatient={this.props.updatePatient}
                arquivarUser={this.props.arquivarUser}>
            </ListItens>
        )
    }
}

export default HomePage