module.exports={
    entry: './src/index.js',
    output:{
        path: "public",
        filename:'bundle.js',
        publicPath: "/public/"
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module:{
        loaders:[{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader:"babel-loader"     
            ,
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                
            }
        }, 
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }
        ] 
    }

}