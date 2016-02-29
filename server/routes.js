import ReactDOM from 'react-dom/server';
import React from 'react';
import Path from 'path';
import Inert from 'inert';
//
import articleList from './articleList';
import markdownCompiler from './markdownCompiler';
//
import Header from '../components/shells/Header';
import SideBar from '../components/shells/SideBar';
import PaginatedArticles from '../components/shells/PaginatedArticles';
//
export default function(server) {
    server.register(Inert, () => {});
    //
    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                const Html = require("../components/shells/html").default;
                const props = {};
                props.articles = [markdownCompiler()];
                props.children = ([<Header {...props} />,<SideBar {...props} />,<PaginatedArticles {...props}/>])
                const renderedHtml = ReactDOM.renderToString( <Html {...props} /> );
                const response = `<!DOCTYPE html>${renderedHtml}`;
                reply(response);
            }
        },
        //Serve Files out of the static folder
        {
            method: 'GET',
            path: '/static/{param*}',
            handler: {
                directory: {
                    path: Path.normalize(__dirname + '/../static')
                }
            }
        },
        {
            method: 'GET',
            path: '/request/articleList/{count?}',
            handler: function(request, reply) {
                if(request.params.count === undefined) console.log("no params");
                console.log("request",request.params);
                reply(articleList());

            }
        },

    ]);
    //
    return server;
}
