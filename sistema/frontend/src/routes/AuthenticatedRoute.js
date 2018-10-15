/* eslint-disable */

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class AuthenticatedRoute extends Component {
  renderComponent (isUserAuthenticated, Component) {
    return props => (isUserAuthenticated
      ? (<Component {...props} />)
      : (<Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />))
  }

  render () {
    const { isUserAuthenticated, component: Component, ...rest } = this.props
    return (<Route {...rest} render={this.renderComponent(isUserAuthenticated, Component)} />)
  }
}

const mapStateToProps = ({ authentication: { isUserAuthenticated } }) => ({ isUserAuthenticated })

export default connect(mapStateToProps)(AuthenticatedRoute)
