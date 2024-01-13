const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // Specify development mode
    mode: 'development',
    // Listen for changes
    watch: true,
    // Entrypoint of our app
    entry: "./src/index.js",
    output: {
        clean: true,
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[name].[hash][ext][query]"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|\.styl$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },
            // Optimize files (In this case .png) and generate hashes for every file. This is included in webpack
            {
                test: /\.png$/i,
                type: "asset/resource"
            },
            // Optimize files (In this case .woff and .woff2) and generate hashes for every file. This is included in webpack
            {
                test: /\.(woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name].[hash][ext][query]"
                }
                /*use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    }
                }*/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        /*new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        })*/
        new DotEnv(),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        port: 3001,
    },
}