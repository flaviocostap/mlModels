import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <h3>Cadastro</h3>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                        <label>Nome</label>
                        <input type="text" name="username" value={this.props.user.username} onChange={this.handleUserChange} />
                        <div className="errorMsg">{this.props.errorUser.username}</div>
                        <label>Email ID:</label>
                        <input type="text" name="emailid" value={this.props.user.emailid} onChange={this.handleUserChange} />
                        <div className="errorMsg">{this.props.errorUser.emailid}</div>
                        <label>Senha</label>
                        <input type="password" name="password" value={this.props.user.password} onChange={this.handleUserChange} />
                        <div className="errorMsg">{this.props.errorUser.password}</div>
                        <input type="submit" className="button" value="Register" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login