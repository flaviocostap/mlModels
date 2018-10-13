import React, { Component } from 'react';
import axios from 'axios'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        try {
            let features
            axios.get('http://127.0.0.1:8000/api/').then(res => {
                features = res.data.map(item => {
                    if (item.arquivar === false) {
                        if (item !== undefined)
                            return item
                    }
                });
                features = features.filter(item => {
                    return item !== undefined
                })
                console.log(features)
                this.props.handleFeatures(features)
            })
        } catch (e) {
            console.log(e);
        }
    }
    putUser(id) {
        console.log(this.state.fields)
        axios.put('http://127.0.0.1:8000/atualizar/' + id + '/', this.state.fields)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            });
    }
    arquivarUser(item) {
        item.arquivar = true
        axios.put('http://127.0.0.1:8000/atualizar/' + item.id + '/', item)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            });
    }
    putSsemgfile() {
        let url = 'http://127.0.0.1:8000/semgfile/'
        const fd = new FormData();
        fd.append('dado', this.state.selectedFile, this.state.selectedFile.name)
        axios.post(url, fd)
            .then(response => {
                console.log(response.data)
                if (response.data.id) {
                    let fields = this.state.fields;
                    fields['id_semg'] = response.data.id
                    this.setState({ fields });
                    this.postUser()
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
    updatePatient(id) {
        console.log(id)
        console.log('teste')
    }

    render() {
        return (
            <div class="container">
                <ul className="list-group list-group-flush">
                    {
                        this.props.features.map(item => (
                            <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                nome: <h2 class="mt-2">{item.nome}</h2>
                                idade: <h2>{item.idade}</h2>
                                sexo: <h2>{item.sexo}</h2>
                                resultado: <h2>{item.resultado}</h2>
                                id: <h2>{item.id}</h2>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-warning" onClick={() => this.updatePatient(item.id)}>Editar</button>
                                    <button type="button" class="btn btn-outline-danger" onClick={() => this.arquivarUser(item)}>Arquivar</button>
                                </div>

                            </li>
                        )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default HomePage