class Animal{
    eat(food){
        console.log(`${this.constructor.name} like eat ${food}`)
    }
    play(){};
    Demo(){
        console.log('this is demo')
    }
}
class Dog extends Animal{
    eat(food){
        console.log(`狗狗喜欢吃${food}`)
    }
    play(){
        console.log(`狗狗喜欢玩球`)
    }
}
class Cat extends Animal{
    // eat(food){
    //     console.log(`猫咪喜欢吃${food}`)
    // }
}

var dog = new Dog();
dog.eat('肉');
dog.play();
dog.Demo();
var cat = new Cat();
cat.eat('鱼');
cat.play();