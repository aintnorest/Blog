import React from 'react';
import ReactDOM from 'react-dom/server';

/* Check props for the url and underline the current section */
export default function(props) {
    return (
        <header>
            <div className="Left">
                <img style={{background: "black", margin: "20px", height: "120px", width: "120px"}} alt="logo" src="static/assets/logo.png" />
            </div>
            <div className="Right">
                <div className="Top">
                    <h1>
                        Ain't No Rest . Today
                    </h1>
                </div>
                <div className="Bottom">
                    <nav>
                        <ul>
                            <li><a href="#">Articles</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Archive</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
