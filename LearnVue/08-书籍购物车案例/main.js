const app =new Vue({
    el:"#app",
    data:{
        books:[
            {id:1,name:"算法",date:'2006-9',price:85.00,count:2},
            {id:1,name:"Linux",date:'2002-9',price:45.00,count:0},
            {id:1,name:"C++",date:'2001-9',price:55.00,count:1},
            {id:1,name:"JAVA",date:'2016-9',price:86.00,count:2}
        ]
    },
    methods:{
        getFinal:function(price){
            return '$' + price.toFixed(2)
        },
        addClick(index){
            this.books[index].count ++
        },
        subClick(index){
            this.books[index].count --
        },
        removeHandle(index){
            this.books.splice(index,1)
        }
    },
    filters:{
        showPrice(price){
            return '$' + price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            // let totalPirce = 0;
            // for(let i =0 ;i< this.books.length ;i++){
            //     totalPirce += this.books[i].price * this.books[i].count
            // }


            //reduce  高阶函数  函数式编程
            //filter/map/reduce
            //命令式编程   声明式编程
            //面向对象编程   函数式编程   第一公民  ：对象/函数
            return this.books.reduce(function (pre,book) {
                return pre  + book.price * book.count
            })
        }
    }
})

const nums = [,20,30,50,22,33,86]
//filter回调函数有要求：必须返回bool值
// 返回true时，函数内部自动将这次回调的n加入到数组中
//返回false时，函数过滤掉这次n

//简洁写法
// let total = nums.filter(function (n) {
//     return n<50
// }).map(function (n) {
//     return n * 2
// }).reduce(function (pre,n) {
//     return pre+= n
// })

//更简洁写法
let total = nums.filter( n => n<50).map(n=> 2*n).reduce((pre,n)=>pre +n)

console.log(total);
// let  newNums = nums.filter(function (n) {
//     return n<50
// })
//
// //遍历数组，对数组的所有元素执行函数操作返回
// let new2Nums = newNums.map(function (n) {
//     return n*2
// })
//
// //对数组中所有内容进行汇总  相乘，相加
// //reduce(参数1，参数2) 上一次返回的结果，默认值
// let totalNums = new2Nums.reduce(function (preValue , n) {
//     return preValue += n
// },0)
// //如果 return 里面的数是100
// //第一次为0  n 20
// //第二次为100 n 40
// //第三次为100  n 80
//
// console.log(totalNums);
//
// console.log(new2Nums);
// //reduce
// console.log(newNums);
//取出小于50数字
// let newNums =[]
// for(let n in nums){
//     if(n<50){
//         newNums.push(n)
//     }
// }


//乘个2
// let new2Nums = []
// for(let n of newNums){
//     new2Nums.push(n)*2
// }

//数组求和

// let totalNums = 0 ;
// for()...
