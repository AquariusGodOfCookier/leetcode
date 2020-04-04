
Function.prototype._call = function(context){
    if(typeof this != 'function'){
        throw new TypeError('error')
    }
    if(typeof context == 'undefind' || context == null){
        context = window;
    }
    let arg = [...arguments].slice(1);
    context.fn = this;
    let result = context.fn(...arg);
    delete context.fn;
    return result;
}

Function.prototype._apply = function(context){
    if(typeof this != 'function'){
        throw new TypeError('error');
    }
    if(typeof context == 'undefined' || context==null){
        context = window;
    }
    let ar1 = arguments[1]==undefined?[]:arguments[1];
    context.fn = this;
    let result = context.fn(...ar1);
    delete context.fn;
    return result;
}

Function.prototype._bind = function(context){
    if(typeof this != 'function'){
        throw new TypeError('error')
    }
    context = context || window;
    let ar1 = [...arguments].slice(1);
    let _this = this;
    return function(){
        return _this.apply(context,ar1)
    }
}


function add(a,b,c){
    console.log(this.name+':'+a+b+c)
}
var obj = {
    names:{
        name:'sd'
    }
}
// add(1,2,3);
// add.call(obj.names,2,3,4)
// add._call(obj.names,2,3,4)

// add.apply(obj.names,[2,3,4])
// add._apply(obj.names,[2,3,4])

add.bind(obj.names,2,3,4)();
add._bind(obj.names,2,3,4)();