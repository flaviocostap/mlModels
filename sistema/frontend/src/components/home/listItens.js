import React, { Component } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import edit_icon from '../../img/edit.svg'

const columns = [
    {
        name: "Nº",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Nome",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Idade",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Sexo",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Resultado sobre a DP",
        options: {
            filter: true,
            viewColumns: false,
            sort: false,
        }
    },
    {
        name: "Opções",
        options: {
            filter: false,
            sort: false,
        }
    }, {
        name: "Id",
        options: {
            filter: false,
            sort: false,
            display: false,
        }
    },
];

const options = {
    filterType: 'checkbox',
};

class ListItens extends Component {
    constructor(props) {
        super(props)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.idFeature !== this.props.idFeature) {
            try {
                let features
                axios.get('http://127.0.0.1:8000/api/').then(res => {
                    features = res.data.map(item => {
                        if (item !== undefined)
                            return item
                    });
                    features = features.filter(item => {
                        return item !== undefined
                    })
                    this.props.handleFeatures(features)
                })
            } catch (e) {
                console.log(e);
            }
        }
    }
    result(item) {
        return item === 0 ? 'Pouca probabilidade' : <div class="alert alert-danger" role="alert">
            Alta probabilidade
      </div>;
    }

    render() {

        let dataFeature = this.props.features.map((currElement, index) => {
            if (currElement.arquivar === this.props.exibirArquivados)
                return [
                    index + 1,
                    currElement.nome,
                    currElement.idade,
                    currElement.sexo === 'M' ? 'Masculino' : 'Feminino',
                    currElement.result ? 'Pouca probabilidade' : 'Alta probabilidade',
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button mini='true' color="secondary"><img src={edit_icon}></img></Button>
                        <Button mini='true' color="secondary">B</Button>
                        <Button mini='true' color="secondary">C</Button>
                    </Grid>,
                    currElement.id
                ]
        })
        dataFeature = dataFeature.filter(a => { return a })
        let features
        if (this.props.pesquisa === null) {
            features = this.props.features
        } else {
            features = this.props.features.filter(ap => {
                if (ap.id === this.props.pesquisa.value) {
                    return ap
                }
            })
        }
        return (
            <div class="container">

                <MUIDataTable
                    title={"Lista de pacientes"}
                    data={dataFeature}
                    columns={columns}
                    options={options}
                />
                <div class="table-responsive">
                    {/* <table id="example" class="display"> */}
                    <table id="listaDeUsuarios" class="table">
                        <caption>Usuários</caption>
                        <thead>
                            <tr>
                                <th scope="col">Nº</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Resultado sobre a DP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                features.map(
                                    item => {
                                        if (item.arquivar === this.props.exibirArquivados) {
                                            return (
                                                <tr>
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.nome}</td>
                                                    <td>{item.idade}</td>
                                                    <td>{item.sexo}</td>
                                                    <td>{item.result === null ? <button type="button" class="btn btn-outline-info" onClick={() => this.props.avaliarPatient(item)}>Avaliar</button> : this.result(item.result)}</td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)} data-toggle="modal" data-target="#editModal">Editar</button>
                                                            <button type="button" class="btn btn-outline-danger" hidden={this.props.exibirArquivados} onClick={() => this.props.arquivarUser(item)}>Arquivar</button>
                                                            <button type="button" class="btn btn-outline-info" onClick={() => this.props.avaliarPatient(item)}>Avaliar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="col">Nº</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Resultado sobre a DP</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListItens