import React from 'react';
import ReactDOM from 'react-dom/server';


export default function(props) {
    return (
        <section>
            {props.articles.map((content, i)=>{
                return <article key={i} dangerouslySetInnerHTML={{ __html: content }} />
            })}
        </section>
    );
}
