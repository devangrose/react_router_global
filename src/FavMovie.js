import React, { Component } from 'react';

class FavMovie extends Component {

    render(props) {
        return (
          <div>
            <h1>Title: {this.props.title}</h1>
            <h3>About: {this.props.about}</h3>
          </div>
        );
    }
}

export default FavMovie;
