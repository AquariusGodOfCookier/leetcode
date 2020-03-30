// 数据类型
// 基本数据类型的特点：直接存储在栈（stack）中的数据

// 引用数据类型：存储的是该对象在栈中的引用，真实的数据存放在堆内存中
// 浅拷贝：只复制指向某个对象的指针，而不是复制对象的本身，新旧对象还是共享同一块内存。

// 深拷贝：它会创造出一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象

// let obj = {
//     name:'sd',
//     list : [1,2,3,4]
// }
// // var obj2 = obj;
// // 直接赋值，赋的是地址，指向同一个堆内存里的数据，一个变，全都变
// // obj2.name = 'tt';

// function shallowCopy(obj){
//     let newObj = {};
//     for(let item in obj){
//         if(obj.hasOwnProperty(item)){
//             newObj[item] = obj[item]
//         }
//     }
//     return newObj
// }
// var shallowObj = shallowCopy(obj)
// shallowObj.name = 'shallow'
// shallowObj.list[0] = '123123'
// // 浅拷贝的时候，若对象只有一层，就为深拷贝，改变新对象的内容不会影响原本对象的值，但如果对象为多层，多层下面就会变回
// console.log('shallowObj',shallowObj)
// console.log('obj',obj)

// 浅拷贝实现方式Object.assign,Object.concat
// var obj = {
//     a:{
//         a:'s'
//     },
//     d:'2'
// }

// var obj1 = obj;
// obj.a.a='2'
// console.log(obj1,obj)
// var obj1 = Object.assign({},obj);
// obj1.d='1'
// console.log(obj1,obj)

// 深拷贝 就是遍历每一层，重新生成一个新对象
var obj = {
    a:'a',
    b:{
        c:'d'
    }
}
var deepCopy = function(params={}){
    if(typeof params!='object' || params == null){
        return params;
    }
    let result;
    if(Array.isArray(result)){
        result = []
    }else{
        result = {}
    }
    for(let key in params){
        if(params.hasOwnProperty(key)){
            console.log('yes',key)
            result[key] = deepCopy(params[key])
        }
    }
    return result
}
var deepObj = deepCopy(obj);
deepObj.b.c='a'
console.log(obj,deepObj)