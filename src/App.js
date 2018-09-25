import React, { Component } from "react";
import { Entry, A } from "./Entry";

class App extends Component {
  state = {
    isTrue: false,
    Login: "",
    Password: ""
  };
  start = () => {
    const login = document.getElementById("login").value;
    const password = document.getElementById("pass").value;
    if (login !== "" && password !== "") {
      this.setState({ isTrue: true, Login: login, Password: password });
    }
  };
  componentDidMount() {
    console.log("1");
  }
  componentWillMount() {
    console.log("2");
  }

  render() {
    return (
      <div>
        {this.state.isTrue ? (
          <Entry log={this.state.Login} pas={this.state.Password} />
        ) : (
          <div>
            <input id="login" type="text" placeholder="Введите логин" />
            <div />
            <input id="pass" type="text" placeholder="Введите пароль" />
            <div />
            <button onClick={this.start}>Start</button>
          </div>
        )}
        <A />
      </div>
    );
  }
}

export default App;
