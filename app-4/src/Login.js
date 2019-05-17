import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
    }
    handleUserChange(name){
        this.setState({ username: name});
    }

    handlePasswordChange(pass){
        this.setState({password: pass});
    }
    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }
render(){
    return(
    <div>
        <input onChange={e => this.handleUserChange(e.target.value)} type='text'/>
        <input onChange={e => this.handlePasswordChange(e.target.value)} type='text'/>
        <button onClick={e => this.handleLogin(e.target.value)}>Login</button>
    </div>
    )
}
}




export default Login;