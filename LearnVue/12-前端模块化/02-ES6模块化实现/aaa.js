let name = 'LYD'

let flag = true;

function sum (num1,num2){
    return num1 + num2 ;
}

if(flag){
    console.log(sum(20, 20));
}
//导出方式1
export {
    flag,
    sum
}
//导出方式2

export var  num1 = 10000;
export var  num2 = 1.88;

//3.导出函数或者类

export function mul(num1,num2){
    return num1 * num2
}

export  class Person{
    run(){
        console.log('执行类函数')
    }
}
//5.export default
// const  address = '北京市'
// export default address

export default  function (argument){
    console.log(argument);
}