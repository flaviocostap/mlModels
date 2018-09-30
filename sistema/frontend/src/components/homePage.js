import React, { Component } from 'react';


class HomePage extends Component {
    constructor(props){
        super(props)
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const features = await res.json();
            this.props.handleFeatures(features)
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="container-fluid">

                 {this.props.features.map(item => (
                    <div key={item.id}>
                        <h1>{item.nome}</h1>
                        <span>{item.idade}</span>
                    </div>
                ))} 
            </div>
        )
    }

}

export default HomePage