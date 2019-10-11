// 工厂模式是用来创建对象的一种最常用的设计模式。我们不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，
// 那么这个函数就可以被视为一个工厂。工厂模式根据抽象程度的不同可以分为：简单工厂，工厂方法和抽象工厂。

//简单工厂模式
// 简单工厂的优点在于，你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节。
// 但是在函数内包含了所有对象的创建逻辑（构造函数）和判断逻辑的代码，每增加新的构造函数还需要修改判断逻辑代码。
// 当我们的对象不是上面的3个而是30个或更多时，这个函数会成为一个庞大的超级函数，便得难以维护。
// 所以，简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用。
// class buyCat{
//     constructor(name,color,play){
//         this.color = color;
//         this.name = name;
//         this.play = play;
//     }
//     do(){
//         return `这只猫叫${this.name},是${this.color}颜色的，它正在玩${this.play}`;
//     }
// }
// var cat1 = new buyCat('小白','黑','篮球');
// console.log(cat1.do())

// 工厂方法模式
// 工厂方法模式的本意是将实际创建对象的工作推迟到子类中，这样核心类就变成了抽象类。
//但是JavaScript的abstract是一个保留字，并没有提供抽象类，所以之前我们只是借鉴了工厂方法模式的核心思想。
// class User {
//     constructor(name='') {
//         if (new.target == User) {
//             throw new Error('抽象类不能实例化')
//         } 
//         this.name = name;
//     }
// }
// class UserFactory extends User{
//     constructor(name){
//         super(name);
//     }
//     do(c){
//         if(c=='sd'){
//             return new UserFactory('孙东').name
//         }
//     }
// }
// let user = new UserFactory();
// let me = user.do('sd');
// console.log(me);


//  抽象工厂模式
// 抽象工厂模式并不直接生成实例， 而是用于对产品类簇的创建。
//  通过继承的方式产生一系列子类类簇，然后通过方法返回指定的类簇
class User{
    constructor(type){
        if(new.target == User){
            throw new Error('抽象类不能实例化')
        }
        this.type = type;
    }
}
class manUser extends User{
    constructor(name){
        super('man');
        this.name = name;
    }
}
class UserFactory{
    constructor(type){
        this.type=type;
    }
    do(){
        if(this.type=='man'){
            return manUser;
        }
    }
}
let man =new UserFactory('man').do();
let b = new man('sd');
console.log(b);