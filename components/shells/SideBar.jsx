import React from 'react';
import ReactDOM from 'react-dom/server';


export default function(props) {
    return (
        <aside>
            <section>
                <h5>Links</h5>
                <ul>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">twitter</a></li>
                </ul>
            </section>
            <section>
                <h5>Most Recent Posts</h5>
                {/*props need to pass in an array of the most recent 5 posts titles with links*/}
            </section>
        </aside>
    );
}
