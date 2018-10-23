import React, { Component } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";


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
            sort: false,
        }
    },
    {
        name: "Idade",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "Sexo",
        options: {
            filter: true,
            sort: false,
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

const data = [
    ["Joe James", "Test Corp", "Yonkers", "Yonkers", "NY", <Button color="secondary">teste</Button>, "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT", "Yonkers", <Button color="secondary">teste</Button>, "NY"],
    ["Bob Herm", "Test Corp", "Tampa", "FL", "NY", <Button color="secondary">teste</Button>, "Yonkers",],
    ["James Houston", "Test Corp", "Dallas", "TX", "NY", <Button color="secondary">teste</Button>, "NY"],
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
                return [index + 1, currElement.nome, currElement.idade, currElement.sexo, currElement.result, currElement.id]
        })
        dataFeature = dataFeature.filter(a=>{return a})
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
                    title={"Employee List"}
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