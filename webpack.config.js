const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    module: {}
};