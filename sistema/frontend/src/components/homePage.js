import React, { Component } from 'react';
import axios from 'axios'
import ListItens from './listItens'

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

    render() {
        return (
            <ListItens features={this.props.features} handleFeatures={this.props.handleFeatures} updatePatient={this.props.updatePatient} arquivarUser={this.props.arquivarUser}>
            </ListItens>
        )
    }
}

export default HomePage