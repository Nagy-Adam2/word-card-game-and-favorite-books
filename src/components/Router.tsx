import React from "react";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainCard from './MainCard';
import Book from './Book';
import '../less/HomePage.less';

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <ul className="Components-unordered-list">
          <li className="Components-list"><Link to="/">Home page</Link></li>
          <li className="Components-list" ><Link to="/word-card-game">Word card game</Link></li>
          <li className="Components-list"><Link to="/favorite-books">Favorite books</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/word-card-game" component={MainCard} />
          <Route path="/favorite-books" component={Book} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;