import React from 'react';

export default () => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>

            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/todos">Tasks</a>
                    </li>
                    <li>
                        <a href="#/about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)