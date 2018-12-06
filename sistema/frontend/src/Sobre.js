import React, { Component } from 'react';
import './css/navbar.css'
import { Link } from 'react-router-dom'
import menu from './img/menu.png'
import pcaimage from './img/model-como.png'
import mach1 from './img/mach1.png'

class Sobre extends Component {
    render() {
        // const options = this.props.features.map(item => {
        //     return {
        //         value: item.id,
        //         label: item.nome,
        //     }
        // })
        return (
            <div>
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

                <main id="mainsobre" role="main" className="container">
                    <div id="sobrepagina" className="jumbotron">
                        <h1 className="display-4">Resultados</h1>

                        <h2>Comitê de Ética e Pesquisa</h2>
                        <p className="lead">
                            Esta pesquisa foi autorizada pelo Comitê de Ética e Pesquisa da Faculdade da Saúde da UnB CAAE 38386714.8.0000.0030 e foi realizado pelos pesquisadores Jorge Luiz (Engenheiro Eletricista) e Bruna da Silva (Fisioterapeuta).
                        </p>
                        <p>

                        </p>

                        <h2>Informações</h2>
                        <p className="lead">Softwarecapaz de auxiliar o diagnóstico da DP (Doença de Parkinson) avaliando tremores patológicos de repouso, utilizando AM (aprendizado de máquinas) para identificar se o indivíduo é um possível portador ou não da doença. Com relação aos dados que serão analisados pelo algoritimo, estes dados serão coletados através da sEMG (sigla do inglês: <i>surface electromyography</i>, eletromiografia de superfície).</p>
                        <h2>Repositório</h2>
                        <p className="lead">O código do software, bem como o TCC associado podem ser acessados no seguinte link <a id="linkgit" href="https://github.com/SkiNgK/mlModels">GitHub: mlModels</a></p>

                        <h2>Acurácia</h2>
                        <div class="d-flex justify-content-between">
                            <div className="card" id="cardimage">
                                <img className="card-img-top" src={pcaimage} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 class="card-title">Comparativo</h5>
                                    <p class="card-text">Como observado na figura acima o <i>Random Forest</i>, obteve uma melhor acurácia, portanto este foi o algoritimo utilizado na classificação.</p>
                                </div>
                            </div>
                            <div className="card" id="cardimage">
                                <img className="card-img-top" src={mach1} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 class="card-title">Matriz de confusão do canal 1</h5>
                                    <p class="card-text">Matriz de confusão do canal 1, sem o <i>cross validator</i>, utilizando o <i>Random Forest</i>.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

            </div>

        )
    }
}
export default Sobre;