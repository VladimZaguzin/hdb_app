const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");
var path = require("path");

module.exports={
    entry: './src/index.js',
    output:{
        path: __dirname + "/public",
        filename:'bundle.js',
        publicPath: "/public/"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module:{
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                
            }
        }, 
        {
             test: /\.s(a|c)ss$/, 
                loader: ExtractTextPlugin.extract({loader: ['style-loader', 'css-loader', 'sass-loader' ]})
              },
              {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({loader:
                    ['style-loader', 'css-loader', 'sass-loader']
                })
              },
              {
                test: /\.(|gif||svg|woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: 'file-loader', options: {name: '[name].[ext]'}
              },  {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader?limit=200000'
              },
        ] 
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
      ]

}
