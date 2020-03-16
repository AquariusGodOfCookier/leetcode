// var fun = function(){
//     return 20;
// }
// fun.toString = function(){
//     return 10;
// }
// console.log(fun+10)
// 函数柯理化就是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// var add = function (x,y) { 
//     return x+y
//  }
//  console.log(add(1,2));
//  var curry = function(x){
//      return function(y){
//          return x+y
//      }
//  }
//  console.log(curry(1)(2))
// 来列一列Currying有哪些好处呢？
// 1. 参数复用
// 正常正则验证字符串 reg.test(txt)

// 函数封装前
// function check(reg, txt) {
//     return reg.test(txt)
// }

// check(/\d+/g, 'test')       //false
// check(/[a-z]+/g, 'test')    //true

// // Currying后
// function curryingCheck(reg) {
//     return function(txt) {
//         return reg.test(txt)
//     }
// }

// var isNumber = curryingCheck(/\d+/g)
// var isLetter = curryingCheck(/[a-z]+/g)

// console.log(isNumber('123213'))     // true
// console.log(isLetter('asd')) //true
// //上面的示例是一个正则的校验，正常来说直接调用check函数就可以了，但是如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数reg进行复用，这样别的地方就能够直接调用hasNumber，hasLetter等函数，让参数能够复用，调用起来也更方便。
// // 延迟运行
// Function.prototype.bind = function (context) {
//     var _this = this
//     var args = Array.prototype.slice.call(arguments, 1)
 
//     return function() {
//         return _this.apply(context, args)
//     }
// }
// // 像我们js中经常使用的bind，实现的机制就是Currying.

// 初步封装
// var currying = function(fn) {
//     // args 获取第一个方法内的全部参数
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function() {
//         // 将后面方法里的全部参数和args进行合并
//         var newArgs = args.concat(Array.prototype.slice.call(arguments))
//         // 把合并后的参数通过apply作为fn的参数并执行
//         return fn.apply(this, newArgs)
//     }
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };
    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}


console.log(add(1)(2)(3)(4,5,6).toString())// 10

