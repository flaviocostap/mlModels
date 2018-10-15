import React, { Component } from 'react';
import Select from 'react-select';
import '../css/navbar.css'

class NavBar extends Component {
    render() {
        const options = this.props.features.map(item => {
            return {
                value: item.id,
                label: item.nome,
            }
        })
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <div id="pesquisa">
                    <Select
                        name="colors"
                        options={options}
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