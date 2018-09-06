import React, { Component } from 'react';

class FavFood extends Component {
  render(props) {
    return(<h1>My favorite food is {this.props.food}</h1>);
  }
}

export default FavFood;
