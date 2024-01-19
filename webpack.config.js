const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        bundle:path.resolve(__dirname,'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name]-[contenthash].js',
        assetModuleFilename:'assets/images/[name][ext]',
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                type:"asset/resource",
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack Application',
            template:path.resolve(__dirname,'src/index.html'),
        })
    ],
    devtool:'source-map',
    devServer:{
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        compress:true,
        port:3000,
        open:true,
        hot:true,
        historyApiFallback:true,
    }
}