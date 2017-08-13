module.exports = {
    devtool: 'inline-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'fs': 'memfs',
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
};
