// 在js中，对象都有__proto__属性，
// 一般这个是被称为隐式的原型，该隐式原型指向构造该对象的构造函数的原型。

// 函数比较特殊，它除了和其他对象一样有__proto__属性，
// 还有自己特有的属性----prototype，这个属性是一个指针，
// 指向一个包含所有实例共享的属性和方法的对象，称之为原型对象。
// \原型对象也有一个constructor属性，该属性指回该函数。

// var f = function(){};
// Object.prototype.a = function(){};
// Function.prototype.b = function(){}

// console.log(Function.prototype.__proto__)

// 描述new一个对象得过程
class Parent{
    constructor(name){
        this.name = name
    }
    echo(){
        console.log(this.name)
    }
}

var my = new Parent('baba')
// my.echo()

var Gril = function(name){
    this.name = name;
}
Gril.prototype.echo = function(){
    console.log(this.name)
}
var girls = new Gril('mama');
// girls.echo()
// new一个对象得过程
var Gril = function(name){
    // 创造了一个新的空对象 
    // let this= {}
    // 将引用赋值给this，继承函数的原型
    this.name = name;
    // 将this返回给函数，通过this向函数的原型中添加对象或方法
    // 返回this指向信对象
    //return this
}
var a = 'aaa'
console.log(a.__proto__)