// 建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节。
// 建造者模式属于对象创建型模式。
// 意图：将一个复杂的构建与其表示相分离，使得同样构建过程可以构建不同的表示
// 应用实例： 1、去肯德基，汉堡、可乐、薯条、炸鸡翅等是不变的，而其组合是经常变化的，生成出所谓的"套餐"。 2、JAVA 中的 StringBuilder。
// 优点： 1、建造者独立，易扩展。 2、便于控制细节风险。
// 缺点： 1、产品必须有共同点，范围有限制。 2、如内部变化复杂，会有很多的建造类。
// 食物类
class Food{
    constructor(){
        this.name = null;
        this.price = null;
    }
}
class Hanburger extends Food{
    constructor(){
        super();
        this.name='汉堡';
        this.price=4;
    }
}
class Coco extends Food{
    constructor(){
        super();
        this.name='可乐';
        this.price=1;
    }
}
class Chicken extends Food{
    constructor(){
        super();
        this.name = '鸡翅';
        this.price = 2;
    }
}
// 菜单类
class Meal{
    constructor(){
        this.foodList = [];
    }
    addItem(item){
        this.foodList.push(item)
    }
    showPrice(){
        let price = 0;
        this.foodList.forEach(item=>{
            price += item.price;
        })
        return price;
    }
}
// 抽象建造者类
class Builder{
    cookHanbuger(){};
    cookChicken(){};
    cookCoco(){};
}
class KFCCookie extends Builder{
    constructor(){
        super();
        this.Meal = new Meal();
    }
    cookHanbuger(number){
        while(number--){
            this.Meal.addItem(new Hanburger());
        }
    }
    cookChicken(number){
        while(number--){
            this.Meal.addItem(new Chicken());
        }
    }
    cookCoco(number){
        while(number--){
            this.Meal.addItem(new Chicken());
        }
    }
    finish(){
        return this.Meal.showPrice();
    }
}
// 下单
class Sell{
    constructor(){
        this.build = null;
    }
    buildCook(build){
        this.build = build;
    }
    countPrice(bungerCount,chickenCount,cocoCount){
        this.build.cookHanbuger(bungerCount);
        this.build.cookChicken(chickenCount);
        this.build.cookCoco(cocoCount);
        console.log(`总价钱为:${this.build.finish()}`);
    }
}
var customer = new Sell();
var cook = new KFCCookie();
customer.buildCook(cook);
customer.countPrice(2,3,4);