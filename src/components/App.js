import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "not Hello World",
      cats: ""
    };
    this.fetchCats = this.fetchCats.bind(this);
  }

  componentDidMount() {
    this.fetchCats();
  }


  fetchCats() {
    fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then((data) => this.setState(data))
  }



  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.cats}</p>
      </div>
    );
  }
}
