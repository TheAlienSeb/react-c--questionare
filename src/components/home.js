import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Helmet>
      <title>C++ Quiz</title>
    </Helmet>
    <div id="home">
      <section id="section">
        <div style={{ textAlign: 'center' }}>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h1>C++ Quiz</h1>

        <div className="play-button-container">
          <ul>
            <li><Link className="play-button" to="/play/instructions">Quiz Yourself</Link></li>
          </ul>
        </div>
      </section>
    </div>
  </Fragment>
);

export default Home;
