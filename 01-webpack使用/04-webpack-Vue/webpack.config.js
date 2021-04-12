const path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //css-loader只负责将css文件进行加载，不负责解析和放到html中
                //需要安装style-loader负责将样式添加到DOM中
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                //css-loader只负责将css文件进行加载，不负责解析和放到html中
                //需要安装style-loader负责将样式添加到DOM中
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片编译成base64字符串
                            //单位B 默认8196B  8kB
                            limit: 8196,
                            name:'img/[name].[hash:8].[ext]',
                        },

                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    }

            },
        ]
    },
    resolve:{
        //别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions:['.js','.vue','.css']
    },
}