import React, { Component } from 'react';

class Hello extends Component {
  
  constructor(props) {
    super();
    this.state = {
      moodPoints: 0
    };
    this.increaseMood = this.increaseMood.bind(this);
    }

  increaseMood(e) {
    this.setState({
      moodPoints: this.state.moodPoints + 1,
    });
  }
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h3>You are {this.props.age}</h3>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={this.increaseMood}>CHEER UP!</button>
      </div>
    );
  }
}
export default Hello;
