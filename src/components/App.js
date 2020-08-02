import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "not Hello World",
      cats: "",
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCats = this.fetchCats.bind(this);
  }

  componentDidMount() {
    this.fetchCats();
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
  fetch('http://localhost:3000/cats/database', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({value: this.state.value}),
  })
  .then(response => response.json())
  .then(data => {
  console.log('Success:', data);
  })
    event.preventDefault();
  }

  fetchCats() {
    fetch('http://localhost:3000/cats/database')
    .then(response => response.json())
    .then((data) => {
    this.setState(data[0])
    console.log(data[0])
    }
    )
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>

        <p>{this.state.message}</p>
        <p>{this.state.userId}</p>
      </div>
    );
  }
}
