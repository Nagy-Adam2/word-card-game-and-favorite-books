import React from 'react';
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../less/Grid.less'
import '../less/MainCard.less';

class MainCard extends React.Component {
  render () {
    return (
      <div className="MainCard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Word card game</h1>
              <h2>Click one card, that reveals the hungarian word.</h2>
            </div>
          </div>
          <div className="main-container">
            <div className="row d-flex justify-content-center main">
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="quite" backSide="egészen" /> 
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="suggestion" backSide="javaslat" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="available" backSide="elérhető" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="exact" backSide="pontos" />
              </div> 
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="received" backSide="kapott" />
              </div> 
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="capabilities" backSide="képességeit" />
              </div> 
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">      
                <Card frontSide="interesting" backSide="érdekes" />
              </div> 
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">      
                <Card frontSide="similar to" backSide="hasonló" />
              </div> 
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="provide" backSide="biztosítani" />
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Card frontSide="appreciate" backSide="méltányol" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCard;