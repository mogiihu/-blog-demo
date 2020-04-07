const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name:'[name].[ext]',
                    //         outputPath: 'images'
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 200,
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                rules: [{
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                }]
            },
            {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            preset: ['env', 'react']
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'cheap-inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    }
};