import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Blog from './Blog';
import FavMovie from './FavMovie';
import FavFood from './FavFood';
import About from './About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/blog">Blog</Link>{' '}
          <Link to="/favorite/food">Favorite food</Link>{' '}
          <Link to="/favorite/movie">Favorite Movie</Link>
        </nav>
        <Route exact path="/" component={Home}>Home</Route>
        <Route path="/blog" component={ () =>
          <Blog title="My first blog"
                author="Devan Grose"
                body="Wow this is so cool I guess"
                comments={["wow","so cool", "love it"]} />
        }/>
        <Route path="/favorite/food" component={ () =>
            <FavFood food="all the things." />
        }/>
        <Route path="/favorite/movie" component={ () =>
            <FavMovie title="The Best Movie of All" about="its the best" /> 
        }/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
