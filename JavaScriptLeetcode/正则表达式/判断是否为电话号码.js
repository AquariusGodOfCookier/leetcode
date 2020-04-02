var isPhone = function(str){
    var reg = /^1[34578]\d{9}$/;
    return reg.test(str)
}
var str = 12904608507;
console.log(isPhone(str))