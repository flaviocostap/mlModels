import React, { Component } from 'react';
import Select from 'react-select';
import '../../css/navbar.css'
import { Link } from 'react-router-dom'
import menu from '../../img/menu.png'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teste: null,
        };
    }
    render() {
        const options = this.props.features.map(item => {
            return {
                value: item.id,
                label: item.nome,
            }
        })
        const exibirArquivados = this.props.exibirArquivados
        return (
            <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth" id="navbr">
                <button id="navbutton" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu}></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li id={`${exibirArquivados ? '' : 'activeitem'}`}>
                            <Link onClick={this.props.handleBotaoHome} className="nav-link" to="/">HOME</Link>
                        </li>
                        <li id={`${exibirArquivados ? 'activeitem' : ''}`}>
                            <Link onClick={this.props.handleBotaoArquivados} className="nav-link" to="/arquivados">ARQUIVADOS</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/sobre">SOBRE</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Select id="pesquisa"
                                name="colors"
                                options={options}
                                placeholder="Pesquisa por nome"
                                className="basic-multi-select"
                                classNamePrefix="select"
                                onChange={this.props.handlePesquisa}
                            />
                        </li>
                        <li className="nav-item">
                            <a data-toggle="modal" data-target="#cadastroModal" onClick={this.props.handleBotaoHome} className="nav-link" href="#">Cadastro de paciente</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">Sign Up </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar