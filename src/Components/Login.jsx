import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "shinoy" };
  }
  onLogin = () => {
    this.setState({ name: this.state.name + "Amritha" });
  };
  render() {
    return (
      <div>
        Login
        <br />
        User name : <input type="textbox" value={this.state.name}></input>
        <br />
        Password : <input type="password"></input>
        <br />
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
