// 判断是否符合xxx-xxx-xxxx的格式

var isxxx = function(str){
    var reg = /^(\d{3}-){2}\d{4}$/;
    return reg.test(str)
}
var str = '123-456-789';
console.log(isxxx(str))