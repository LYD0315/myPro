const webpackMerge = require('webpack-merge')
const  baseConfig = require('./base.config')

module.exports =  webpackMerge.merge(baseConfig,{
    //添加本地服务需要进行的配置
    devServer:{
        contentBase:'./dist',
        inline :true,
    }
})
