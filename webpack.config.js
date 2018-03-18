'use strict';
var webpack = require('webpack');

var config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Check for all js files
                loader: 'babel-loader',
                query: {
                    presets: [ "babel-preset-es2015" ].map(require.resolve)
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"  //JSON loader
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/build',
    },
};

module.exports = config;