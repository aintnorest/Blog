import React from 'react';
import ReactDOM from 'react-dom/server';

/* Check props for the url and underline the current section */
export default function(props) {
    return (
        <header>
            <img alt="logo" src="static/assets/logo.png" />
            <h1>
                Ain't No Rest Today
            </h1>
            <nav>
                <ul>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Archive</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    );
}
