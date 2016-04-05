import React from 'react';
import ReactDOM from 'react-dom/server';

const htmlS = {
    width: "100%",
    display: "flex",
    height: "100%",
    margin: "0px",
    padding: "0px"
};
const bodyS = {...htmlS, overflow:"hidden", flexDirection:"column"};

export default function(props) {
    return (
        <html style={htmlS}>
            <head>
                <title>Aint No Rest . Today</title>
                <link rel='shortcut icon' href='./static/assets/favicon.ico' type='image/x-icon' />
                <link rel='stylesheet' href='./static/styles/index.css' />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, width=device-width" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="msapplication-tap-highlight" content="no" />
            </head>
            <body style={bodyS}>
                {props.children[0]}
                <div style={{display: "flex",flex:"1 1 auto"}}>
                    {props.children[1]}
                    {props.children[2]}
                </div>
                {/*<div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
                <div dangerouslySetInnerHTML={{ __html: this.props.scriptTag }} />
                */}
                <script src='./static/src/client.js' charSet='UTF-8' />
            </body>
        </html>
    );
}
