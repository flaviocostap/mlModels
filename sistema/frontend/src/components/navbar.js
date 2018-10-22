import React, { Component } from 'react';
import Select from 'react-select';
import '../css/navbar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        const options = this.props.features.map(item => {
            return {
                value: item.id,
                label: item.nome,
            }
        })
        console.log(options)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <button onClick={this.props.handleBotaoHome} type="button" class="btn btn-outline-primary">
                        Home
                        </button>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#cadastroModal" >
                            Cadastro de paciente
                        </button>
                        <button onClick={this.props.handleBotaoArquivados} type="button" class="btn btn-outline-primary">
                            Arquivados
                        </button>
                    </ul>
                    <Select id="pesquisa"
                        name="colors"
                        options={options}
                        placeholder="Pesquisa por nome"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={this.props.handlePesquisa}
                    />
                </div>
            </nav>

        )
    }
}

export default NavBar