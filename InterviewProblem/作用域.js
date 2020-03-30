// js代码执行前，会有个预处理得过程，在浏览器端又js引擎预处理，在node里由v8引擎处理

// 预处理得过程
// 在代码执行前，浏览器会给个全局作用域window，node会给个全局作用域global
// 全局作用域分为两部分，存储模块与执行模块
// 存储会从上到下依次遍历代码，找到var，function等关键字，把这些变量添加到
// 内存地址，开辟内存空间
// 执行模块会从上到下执行代码，遇到变量就去存储模块中找，找到了看你是否
// 赋值，没有赋值就是undefined
// 没找到就是xxx is not defined

// 原型链
// 函数内部得变量被使用时，首先会在自己的块级作用域下寻找是否存储该变量，
// 如果自己的块级作用域下没找到，会依次上升，找自己得原型上__protp__上
// 是否有该变量，一层一层找，直到全局作用域，有就有，没有就报错，这种查找
// 机制叫做原型链

// 案例分析
var a = 12;
var fun = function () {
    console.log(a)
    var a = 24;
    console.log(a)

    function gg() {
        console.log(a)
    }
    gg()
}
// fun()
// undefined 24 24

var obj = {
    val: 2,
    del: function () {
        var val = 1
        this.val *= 2
        console.log(val)
        console.log(this.val)
        // console.log(this.val)
    }
}
// var ff = obj.del();
var fd = obj.del;
// fd()

// console.log(1)

// setTimeout(()=>{
//     console.log(7)
// })
// Promise.resolve().then(()=>{
//     console.log(4)
// }).then(()=>{
//     console.log(6)
// })
// new Promise((resolve)=>{
//     console.log(2)
//     resolve(5)
// }).then((data)=>{
//     console.log(data)
// })
// console.log(3)
// async function async1() {
//     console.log('async1 start');
//     new Promise((resolve)=>{
//         async2()
//         resolve()
//     }).then(res=>{
//         console.log('async1 end');
//     })
//     // await async2();

// }
// function async2() {
//     console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');

// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0)
//     })(i)
// }
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     })
// }