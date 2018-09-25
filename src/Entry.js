import React, { Component } from "react";

export class Entry extends Component {
  state = {
    isLogin: false
  };
  data = [
    {
      login: "w",
      password: "p"
    },
    {
      login: "o",
      password: "b"
    }
  ];
  componentDidMount() {
    const { log, pas } = this.props;
    this.data.map(x => {
      if (x.login === log && x.password === pas) {
        this.setState({ isLogin: true });
      }
    });
  }
  render() {
    if (this.state.isLogin === true) return <div>Добро пожаловать</div>;
    else return <div>Неверно</div>;
  }
}

export const A = () => {
  return <div>aaaaaaaaaaaaaaaaaaaa</div>;
};
