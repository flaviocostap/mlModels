import React, { Component } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import Grid from '@material-ui/core/Grid';
import edit_icon from '../../img/edit.svg'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deletarItens: {}
        }
    }

    onDeletarItens(event) {
        this.setState(event)
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
        return item === 0 ? 'Baixa probabilidade' : 'Alta probabilidade';
    }
    onRowsDelete(rowsDeleted, dataFeature) {
        dataFeature.map((element, index) => {
            if (rowsDeleted.lookup[index]) {
                this.props.arquivarUser(element)
            }
        })
    }
    render() {
        let dataFeature
        if (this.props.pesquisa === null) {
            dataFeature = this.props.features
        } else {
            dataFeature = this.props.features.filter(ap => {
                if (ap.id === this.props.pesquisa.value) {
                    return ap
                }
            })
        }
        dataFeature = dataFeature.map((currElement, index) => {
            if (currElement.arquivar === this.props.exibirArquivados)
                return [
                    currElement.id,
                    currElement.nome,
                    currElement.idade,
                    currElement.sexo === 'M' ? 'Masculino' : 'Feminino',
                    currElement.result === null ? 'Não avaliado' : this.result(currElement.result),
                    currElement.result === null ? <Button onClick={() => this.props.avaliarPatient(currElement)} mini='true' color="secondary">avaliar</Button> : this.result(currElement.result),
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Button onClick={() => this.props.updatePatient(currElement)} mini='true' color="primary" data-toggle="modal" data-target="#editModal" hidden={this.props.exibirArquivados}><img src={edit_icon}></img>Editar</Button>
                        <Button hidden={this.props.exibirArquivados} onClick={() => this.props.avaliarPatient(currElement)} mini='true' color="secondary">Reavaliar</Button>
                        <Button onClick={() => this.props.desarquivarUser(currElement)} mini='true' color="secondary" hidden={!this.props.exibirArquivados}>Desarquivar</Button>
                    </Grid>,
                ]
        })
        dataFeature = dataFeature.filter(a => { return a })
        const columns = [
            {
                name: "Id", options: {
                    filter: false,
                    sort: true,
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
                name: "Resultado",
                options: {
                    filter: true,
                    sort: false,
                    display: false,
                    rowHover: true,
                },

            },
            {
                name: "Resultado sobre a DP",
                options: {
                    filter: false,
                    sort: true,
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
                    displayRows: "de",
                },
                toolbar: {
                    search: "Pesquisar",
                    downloadCsv: "Download CSV",
                    print: "Imprimir",
                    viewColumns: "Colunas",
                    filterTable: "Filtrar",
                },
                filter: {
                    all: "Todos",
                    title: "FILTROS",
                    reset: "RESETAR",
                },
                viewColumns: {
                    title: "Mostar somente as colunas",
                    titleAria: "Mostrar/Ocultar colunas",
                },
                selectedRows: {
                    text: "linhas(s) selecionadas",
                    delete: "Arquivar",
                    deleteAria: "Arquivar linhas selecionadas",
                },
            },
            onRowsDelete: (rowsDeleted) => {
                this.onRowsDelete(rowsDeleted, dataFeature)
            },
            selectableRows: !this.props.exibirArquivados,
            filterType: "multiselect",
            rowsPerPageOptions: [10, 20, 100],
            responsive: "scroll",
        }

        return (
            <div className="container-fluid">
                <MUIDataTable
                    title={this.props.exibirArquivados ? "Pacientes arquivados" : "Lista de pacientes"}
                    data={dataFeature}
                    columns={columns}
                    options={options}
                    onRowsDelete={a => {
                        console.log(a)
                    }}
                />
            </div>
        )
    }
}

export default HomePage