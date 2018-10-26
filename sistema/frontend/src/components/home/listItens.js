import React, { Component } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import Grid from '@material-ui/core/Grid';
import edit_icon from '../../img/edit.svg'
import delete_icon from '../../img/delete.svg'
import '../../css/tabela.css'

const columns = [
    {
        name: "Nº",
        options: {
            filter: false,
            sort: true,
            sortDirection: "desc",
        }
    },
    {
        name: "Nome",
        options: {
            filter: false,
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
    },
];
const options = {
    textLabels: {
      body: {
        noMatch: "Desculpe, sem registros!",
        toolTip: "Ordenar",
      },
      pagination: {
        next: "Próxima página",
        previous: "Pagina anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "of",
      },
      toolbar: {
        search: "Pesquisar",
        downloadCsv: "Download CSV",
        print: "Imprimir",
        viewColumns: "Colunas",
        filterTable: "Filtrar",
      },
      filterType: 'checkbox',
      filter: {
        all: "Todos",
        title: "FILTERS",
        reset: "RESET",
      },
      viewColumns: {
        title: "Mostar somente as colunas",
        titleAria: "Mostrar/Ocultar colunas",
      },
      selectedRows: {
        text: "linhas(s) selecionadas",
        delete: "Deletar",
        deleteAria: "Deletar linhas selecionadas",
      },
      responsive: 'scroll',
    }
  }

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
        return item === 0 ? 'Pouca probabilidade' : 'Alta probabilidade';
    }

    render() {

        let dataFeature = this.props.features.map((currElement, index) => {
            if (currElement.arquivar === this.props.exibirArquivados)
                return [
                    index + 1,
                    currElement.nome,
                    currElement.idade,
                    currElement.sexo === 'M' ? 'Masculino' : 'Feminino',
                    currElement.result === null ? 'Não avaliado' : this.result(currElement.result),
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button  onClick={() => this.props.updatePatient(currElement)} mini='true' color="secondary" data-toggle="modal" data-target="#editModal" hidden={this.props.exibirArquivados}><img src={edit_icon}></img></Button>
                        <Button onClick={() => this.props.arquivarUser(currElement)} mini='true' color="secondary" hidden={this.props.exibirArquivados}><img src={delete_icon}></img></Button>
                        <Button onClick={() => this.props.desarquivarUser(currElement)} mini='true' color="secondary" hidden={!this.props.exibirArquivados}>Desarquivar</Button>
                        <Button onClick={() => this.props.avaliarPatient(currElement)} mini='true' color="primary" hidden={this.props.exibirArquivados}>avaliar</Button>
                    </Grid>,
                ]
        })
        dataFeature = dataFeature.filter(a => { return a })
        return (
            <div class="container">
                <MUIDataTable
                    title={this.props.exibirArquivados ? "Pacientes arquivados" : "Lista de pacientes"}
                    data={dataFeature}
                    columns={columns}
                    options={options}
                />
            </div>
        )
    }
}

export default ListItens