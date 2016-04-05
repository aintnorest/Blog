import React from 'react';
import ReactDOM from 'react-dom/server';


export default function(props) {
    return (
        <aside className="SideBar">
            <section>
                <h5>Links</h5>
                <ul>
                    <li><a href="https://github.com/aintnorest">Github</a></li>
                    <li><a href="https://twitter.com/CjAvizidrix">twitter</a></li>
                </ul>
            </section>
            <section>
                <h5>Most Recent Posts</h5>
                {props.articles.map((entry,i) => {
                    let e = entry.split(".")[0].replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
                    return <div key={i}>{e}</div>
                })}
            </section>
        </aside>
    );
}
