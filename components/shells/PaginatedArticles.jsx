import React from 'react';
import ReactDOM from 'react-dom/server';


export default function(props) {
    return (
        <section className="MainContent">
            {props.articles.map((content, i)=>{
                return <article key={i} dangerouslySetInnerHTML={{ __html: content }} />
            })}
        </section>
    );
}
