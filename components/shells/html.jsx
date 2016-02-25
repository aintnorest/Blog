import React from 'react';
import ReactDOM from 'react-dom/server';

const htmlS = {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px"
};
const bodyS = {...htmlS, overflow:"hidden"};

export default function(props) {
    return (
        <html style={htmlS}>
            <head>
                <title>Aint No Rest . Today</title>
                <link rel='shortcut icon' href='./static/assets/favicon.ico' type='image/x-icon' />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, width=device-width" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="msapplication-tap-highlight" content="no" />
                {/*<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' /> */}
            </head>
            <body style={bodyS}>
                <div>Hello World</div>
                {/*<div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
                <div dangerouslySetInnerHTML={{ __html: this.props.scriptTag }} />
                */}
                <script src='./static/src/client.js' charSet='UTF-8' />
            </body>
        </html>
    );
}
