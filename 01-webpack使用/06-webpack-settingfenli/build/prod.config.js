const uglifyWebpack = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const  baseConfig = require('./base.config')
const webpack = require('webpack')

module.exports = webpackMerge.merge(baseConfig,{
    plugins:[
        //打包时候需要用的配置 压缩代码
        new uglifyWebpack()
    ],
})

