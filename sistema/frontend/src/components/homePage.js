import React, { Component } from 'react';
import axios from 'axios'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        try {
            axios.get('http://127.0.0.1:8000/api/').then(res => {
                const features = res.data;
                this.props.handleFeatures(features)
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {
                    this.props.features.map(item => (
                        <div key={item.id}>
                            <h1 class="mt-5">{item.nome}</h1>
                            <p>{item.idade}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default HomePage