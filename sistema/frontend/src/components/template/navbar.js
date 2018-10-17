import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changePesquisa } from '../../actions/pesquisaActions'
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
                    </ul>
                    <Select id="pesquisa"
                        name="colors"
                        options={options}
                        placeholder="Pesquisa por nome"
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={this.props.changePesquisa}
                    />
                </div>
            </nav>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changePesquisa }, dispatch)
  }
  
  const mapStateToProps = (state) => {
    return {
      features: state.features,
      pesquisa: state.pesquisa,
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);