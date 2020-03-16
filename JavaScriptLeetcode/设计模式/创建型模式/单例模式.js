// 单例就是单一的意思，单例模式的定义是：保证一个类仅有一个一个实例，并提供一个访问它的全局访问点。
// 无论我实例化多少个对象，最后的结果都是最后的那个
class singleModel{
    constructor(name){
        this.name = name;
        this.instance = null;
    }
    static getInstance(name){
        if(!this.instance){
            this.instance = new singleModel(name);
        }
        return this.instance;
    }
}
var a = singleModel.getInstance('a');
var b = singleModel.getInstance('b');
console.log(a,b)