import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', name: '' };
  }
  componentDidMount() {
    let input = prompt("Please enter your name",);
    this.setState({ name: input ? input : "Guest" });
  }
  onChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div id='main'>
        <span>Welcome, {this.state.name}</span>
        <input onChange={this.onChange.bind(this)} />
        <span>{this.state.text}</span>
      </div>
    );
  }
}

export default App;