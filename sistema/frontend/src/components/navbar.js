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
        return (
            //  <nav className="navbar navbar-dark bg-dark">
            //     <Link to="/" className="navbar-brand">Início</Link>
            //     <Link to="/cadastrar" className="navbar-brand">Cadastrar</Link>
            //     <Link to="/arquivados" className="navbar-brand">Arquivados</Link>
            //     <Link to="/sobre" className="navbar-brand">Sobre</Link>
            //     <div className="form-inline">
            //         <Select  id="pesquisa"
            //             name="colors"
            //             options={options}
            //             className="basic-multi-select"
            //             classNamePrefix="select"
            //             onChange={this.props.handlePesquisa}
            //         />
            //     </div>
            // </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">Home</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/cadastrar" className="nav-link">Cadastrar <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/arquivados" className="nav-link">Arquivados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-link">Sobre</Link>
                        </li>
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