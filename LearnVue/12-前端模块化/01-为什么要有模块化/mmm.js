;(function (){
 //1.使用flag
    if(moduleA.flag){
        console.log('哈哈');
    }
    //2.使用sum函数
    console.log(moduleA.sum(40, 50));
})()
//commonJS 的导入
// var{flag,sum} = require('./aaa.js')
//
// //或者
//
// var aaa = require('./aaa.js')
// var flag = aaa.flag;
