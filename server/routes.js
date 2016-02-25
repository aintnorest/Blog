import ReactDOM from 'react-dom/server';
import React from 'react';
import Path from 'path';
import Inert from 'inert';
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
        }
    ]);
    //
    return server;
}
