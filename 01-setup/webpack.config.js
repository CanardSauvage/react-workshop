module.exports = {
    entry: './app/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules)/, query: {presets: ['es2015', 'react']}},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.html$/, loaders: ['file?name=[path][name].[ext]?[hash]&context=./app/']}
        ]
    }
};
