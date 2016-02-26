export default function* () {
    yield this.start(["wbpck", "setupWatch"], { parallel: true });
}

export function* setupWatch() {
    yield this.watch("styles/index.css", ["css"])
}

export function* css() {
    yield this.clear('static/styles/index.css');
    yield this
    .source('styles/*.css')
    .postcss({
        plugins: [
            require('postcss-cssnext'),
            require("cssnano")
        ]
    })
    .target('static/styles')
}

export function* wbpck() {
    let webpackConfig = {
        watch: true,
        output: {
            path: 'static/src',
            filename: 'client.js',
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['', '.js', '.jsx'],
            alias: {
                'utils': __dirname + '/client/utils',
                'porc': __dirname + '/components/porc/',
                'pureComps': __dirname + '/components/pureComps/',
                'thirdPartyComps': __dirname + '/components/thirdPartyComps/',
                'shells': __dirname + '/components/shells',
                'reducers': __dirname + '/client/reducers/',
                'constants': __dirname + '/client/constants/',
                'actions': __dirname + '/client/actions/',
                'styles': __dirname + '/styles/'
            }
        },
        module : {
            loaders : [
                {
                    test : /\.(js|jsx)$/,
                    exclude : /node_modules/,
                    loader: "babel",
                    query: {
                        presets: ['react', 'es2015', 'stage-1']
                    }
                }
            ]
        }
    }

    yield this
        .source("client/index.js")
        .webpack(webpackConfig)
}
