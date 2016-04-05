import ReactDOM from 'react-dom/server';
import React from 'react';
import Path from 'path';
import Inert from 'inert';
import fs from 'fs';
//
import articleList from './routeHandlers/articleList';
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
                const PAprops = {articles:fs.readdirSync(__dirname + '/articles/')};
                props.articles = [markdownCompiler("famous.md"), markdownCompiler("stayingCurrent.md")];
                props.children = ([<Header {...props} />,<SideBar {...PAprops} />,<PaginatedArticles {...props}/>])
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
            handler: articleList
        },

    ]);
    //
    return server;
}
