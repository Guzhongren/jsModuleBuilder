// var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports={
    entry: './src/main.js',
    output: {
        filename: 'build/build.js'
    },
    module:{
        loaders:[
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.js$/, loader:　'jsx-loader'},
            {test: /\.less$/, loader: "style!css!less"}
        ]
    },
    resolve: {
        extensions:['', '.js', 'jsx']
    },
    plugin: []
}
