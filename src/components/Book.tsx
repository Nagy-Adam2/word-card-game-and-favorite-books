import React, { useState } from 'react';
import Form from "./Form";
import List from "./List";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/style.css';

export interface IState {
  book: {
    title: string
    author: string
    years: number
  }[]
}
  
function Book() { 
  const [book, setBook] = useState<IState["book"]>([
      {
        title: "The invisible legion",
        author: "Jeno Rejto",
        years: 1968
      }
  ]) 
  return (
    <div className="Book">
      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <h1>Favorite books</h1>
              <h2>You can record your favorite books here.</h2>
            </div>
        </div>
        <div className="main-container">
          <div className="row d-flex justify-content-center main">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Form book={book} setBook={setBook} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <List book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;