const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            utils: path.resolve(__dirname, 'src/utils/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'src/index.pug'),
                use: {
                    loader: 'pug-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: true,
                        sourceMap: true,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src','index.pug'),
            minify: true,
            hash: true
        })
    ]
}