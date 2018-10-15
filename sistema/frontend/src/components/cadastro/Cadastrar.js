import React, { Component } from 'react';
import '../../css/cadastro.css'
import NavBar from '../template/navbar'
import Footer from '../template/footer'
class Cadastro extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
         <NavBar features={this.props.features} handlePesquisa={this.props.handlePesquisa}></NavBar>
        <Footer></Footer>
      </div>
    )
  }
}

export default Cadastro
