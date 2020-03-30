
// js对象有两个属性，数据属性与存储器属性，数据属性就是我们常用的哪些vaule值
// 存储器属性就是set，get属性
// set属性对应的方法时setter
// get属性对应的方法是getter、
// vue核心是数据劫持+发布订阅模式，劫持各个属性的setter,getter函数，在数据发生变化的时候发布给订阅者，触发相应的函数，完成双向数据绑定
// vue中数据劫持的方法在2系列版本中是使用Object.definePropert()方法来获取，修改对象数据属性
// vue3.x系列版本中使用proxy对象来获取，修改对象属性

// Object.defineProperty
// let data = {
//     list: ''
// }

// Object.keys(data).forEach(function (key) {
//     let value = data[key];
//     Object.defineProperty(data, key, {
//         enumerable: true,
//         configurable: true,
//         get() {
//             console.log(value,'get')
//             return value;
//         },
//         set(newValue) {
//             console.log(`Setting`);
//             value = newValue;
//             return true;
//         }
//     })
// })
// this.$data = new Proxy(obj,{
//     get:function(target,key,reveive){
//         return target[key];// 不需要中间变量了
//     },
//     set: function (target, key, newValue,reveive){
//         target[key] = newValue;
//     }

// data.list = 'a'
// console.log(data.list);

// vue组件传参

// 1 props
// 2 $listeners & $attrs
// 3 $emit
// 4 slot
// 5 $refs $parent $root $children
// 6 vuex
// 7 provide/inject // 无论组件多深