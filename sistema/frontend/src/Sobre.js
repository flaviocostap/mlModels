import React, { Component } from 'react';
import './css/navbar.css'
import { Link } from 'react-router-dom'
import menu from './img/menu.png'

class Sobre extends Component {
    render() {
        // const options = this.props.features.map(item => {
        //     return {
        //         value: item.id,
        //         label: item.nome,
        //     }
        // })
        return (
            <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth" id="navbr">
                <button id="navbutton" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu}></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to={{
                                pathname: '/',
                                state: {
                                    teste: false
                                }
                            }} className="nav-link" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={{
                                pathname: '/arquivados',
                                state: {
                                    teste: true
                                }
                            }} >ARQUIVADOS</Link>
                        </li>
                        <li id="abasobre" class="nav-item">
                            <Link className="nav-link" to={{
                                pathname: '/sobre',
                                state: {
                                    cardHeading: 'This is a heading',
                                    cardDesc: 'Description'
                                }
                            }} >SOBRE</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Sobre;