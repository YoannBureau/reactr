module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 4444,
        contentBase: 'src'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
        ]
    }
}