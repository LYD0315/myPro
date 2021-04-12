//使用commonJS的模块化规范
const {add,mul } = require('./js/mathUtiks.js')

console.log(add(20, 30));


console.log(mul(20, 30));
//使用ES6的模块化规范
import {name,height} from "./js/info.js";
console.log(name +"身高"+ height)

//依赖css
require('./css/nomal.css')

require('./css/specoal.less')

document.writeln('<h2>你好啊，LYD</h2>')

//使用vue进行开发

import Vue from 'vue'

//import  App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }

})

