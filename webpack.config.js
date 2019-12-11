const path = require('path')
const webpack = require("webpack")
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')//我已经下载了vue-template-compiler和vue-loader,在render中还是无法正常显示组件内容，查了下资料发现是

//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的所以我们要在这两个的基础上再去下载这个插件
//npm i vue-loader-plugin -S,发现还是报错you may need an appropriate loader to handle this file type，后来发现还需要vue-style-loader 
//我发现vue-loder/lib/plugin这个路径下没有plugin目录，但不知什么原因，在没有加vue-style-loader 之前就是报错，加上之后就可以了，想哭..

module.exports = {

entry:path.join(__dirname,'./src/main.js'),
output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
},
devServer:{
    open:true,
    port:3000,
    hot:true
},
plugins:[

    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'

    }),
    new VueLoaderPlugin()
],
module:{
    rules:[
        {test:/\.css$/,use:['vue-style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=500&name=[hash:8]-[name].[ext]'},
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'},//处理.vue的loader
       // {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'}

    ]
},
resolve:{
    // alias:{//设置vue被导入包时的路径
    //  // "vue$":"vue/dist/vue.js"
    // }
}



}