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