import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Quizinsrtuctions = () => (
  <Fragment>
    <Helmet><title>Quiz Instructions</title></Helmet>
    <div className='instructions container'>
        <h1>How to play!</h1>
        <ul className='browser-default' id='main-list'>
            <li>Contains 10 C++ questions!</li>
            <li>There is a timer!</li>
            <li>respond with the appropiate responses</li>
        </ul>
        <div>
            <span className='left'><Link to="/">Back to Home</Link></span>
            <span className='right'><Link to="/play/quiz">Start</Link></span>
        </div>
    </div>
  </Fragment>

);


export default Quizinsrtuctions;
