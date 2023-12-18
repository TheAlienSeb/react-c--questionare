import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';




const home = () => (
    <Fragment>
        <Helmet><title>C++ Quiz</title></Helmet>
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
            <div className="auth-contatiner">
                <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
            </div>
        </section>
    </div>

    </Fragment>

    );


export default home;