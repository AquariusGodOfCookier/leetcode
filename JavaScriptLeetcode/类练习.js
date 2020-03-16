class Animal {
    eat(food) {
        console.log(`${this.constructor.name} like eat ${food}`)
    }
    play() {};
    Demo() {
        console.log('this is demo')
    }
}
class Dog extends Animal {
    eat(food) {
        console.log(`狗狗喜欢吃${food}`)
    }
    play() {
        console.log(`狗狗喜欢玩球`)
    }
}
class Cat extends Animal {
    // eat(food){
    //     console.log(`猫咪喜欢吃${food}`)
    // }
}

// var dog = new Dog();
// dog.eat('肉');
// dog.play();
// dog.Demo();
// var cat = new Cat();
// cat.eat('鱼');
// cat.play();

// console.log(v1, 'this is the first');
// var v1 = 100;

// function foo() {
//     console.log(v1, 'this is the second');
//     var v1 = 200;
//     console.log(v1, 'this is the third');
// }
// foo();
// console.log(v1, 'this is the fourth')

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i,'.');
    }, 1000);
    console.log(i);
}