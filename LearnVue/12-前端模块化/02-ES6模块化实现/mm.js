//导入的对象中定义的变量
import {flag,sum} from "./aaa.js";


if(flag){
    console.log('haha');
    console.log(sum(20, 320));
}
//导入export定义的变量
import {num1,num2} from "./aaa.js";

console.log(num1);
console.log(num2);

//导入export的function/class

import {mul,Person} from "./aaa.js";

console.log(mul(30, 12));

const p = new Person();

p.run();

//导入export default中的内容
import  addr from './aaa.js'

addr(123)

//统一全部导入
import * as  aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.num1);