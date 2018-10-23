import React, { Component } from 'react';
import Select from 'react-select';
import '../../css/navbar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        const options = this.props.features.map(item => {
            return {
                value: item.id,
                label: item.nome,
            }
        })
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${this.props.exibirArquivados?'':'active'}`}>
                            <a onClick={this.props.handleBotaoHome} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={`nav-item ${this.props.exibirArquivados?'active':''}`}>
                            <a onClick={this.props.handleBotaoArquivados} className="nav-link" href="#">Arquivados </a>
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
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
            //         <ul className="navbar-nav">
            //             <a onClick={this.props.handleBotaoHome} className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            //             <a onClick={this.props.handleBotaoArquivados} className="nav-link" href="#">Arquivados </a>
            //             <Select id="pesquisa"
            //                 name="colors"
            //                 options={options}
            //                 placeholder="Pesquisa por nome"
            //                 className="basic-multi-select"
            //                 classNamePrefix="select"
            //                 onChange={this.props.handlePesquisa}
            //             />

            //             <li className="nav-item dropdown">
            //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     Menu
            //              </a>
            //                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            //                     <a data-toggle="modal" data-target="#cadastroModal" onClick={this.props.handleBotaoHome} className="dropdown-item" href="#">Cadastro de paciente</a>
            //                     <a className="dropdown-item" href="#">Logout</a>
            //                 </div>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>

        )
    }
}

export default NavBar