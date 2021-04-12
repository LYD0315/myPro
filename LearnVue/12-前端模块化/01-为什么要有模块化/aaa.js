// var name = '小明'
// var age = 22
//
//
// function sum(num1,num2){
//     return num1 + num2
// }
// var flag = true
//
// if(flag){
//     console.log(sum(10, 20));
// }

//使用匿名函数可以解决变量重名问题
// var moduleA = (function (){
//     //给一个导出的对象
//     var obj = {}
//
//     var name = '小明'
//     var age = 22
//
//
//     function sum(num1,num2){
//         return num1 + num2
//     }
//     var flag = true
//
//     if(flag){
//         console.log(sum(10, 20));
//     }
//
//     obj.flag = flag;
//     obj.sum = sum;
//
//     console.log(obj);
//
//     return obj;
// })()

//node 的 commonJS写法
// var obj = {}
//
// var name = '小明'
// var age = 22
//
//
// function sum(num1,num2){
//     return num1 + num2
// }
// var flag = true
//
// if(flag){
//     console.log(sum(10, 20));
// }
//
// module.exports = {
//     flag:flag,
//     sum:sum
// }