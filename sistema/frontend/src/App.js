// App.js
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeFeatures } from './actions/featureActions'
import axios from 'axios'

import NavBar from './components/template/navbar'
import HomePage from './components/home/homePage'
import Footer from './components/template/footer'

class App extends Component {

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
        this.props.changeFeatures(features)
      })
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <HomePage>
        </HomePage>
        <Footer></Footer>
      </div >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeFeatures }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    features: state.features,
    pesquisa: state.pesquisa,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);