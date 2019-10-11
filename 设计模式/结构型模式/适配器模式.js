// 将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器(Wrapper)。
// 适配器模式既可以作为类结构型模式，也可以作为对象结构型模式。

// 现在这个手机能够使用安卓充电器，现在想让他能使用苹果与华为充电接口

class phoneCharge {
    constructor(type) {
        if (new.target == phoneCharge) {
            throw new Error('抽象类不能实例化')
        }
        this.type = type;
    }
}
class huweiInstance {
    use(type) {
        return `我正在用${type}充电线充电`
    }
}
class iphoneInstance {
    use(type) {
        return `我正在用${type}充电线充电`
    }
}
class phoneInstance extends phoneCharge {
    constructor(type){
        super(type)
    }
    use(type) {
        if (type == 'iphone') {
            return new iphoneInstance().use(type);
        } else if (type == 'huawei') {
            return new huweiInstance().use(type);
        }
    }
}
class charge extends phoneCharge {
    constructor(type) {
        super(type);
    }
    charge() {
        if (this.type == 'android') {
            return `我正在用${this.type}充电线充电`
        } else {
            return new phoneInstance().use(this.type);
        }
    }
}
let phone = new charge('huawei');
let a = phone.charge();
console.log(a);