import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css';

class HomePage extends React.Component {
  render () {
    return (
      <div className="HomePage">
        <h1>Word card game and favorite books</h1>
        <p>Welcome home page, where I present my two projects.</p>
        <p>The word card game, where you click on a card to reveal the hungarian word.</p>
        <p>The favorite books, where you can record your favorite books here.</p>
      </div>
    );
  }
}

export default HomePage;