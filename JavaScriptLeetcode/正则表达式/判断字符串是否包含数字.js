var isHaveNumber = function(str){
    var reg = /\d/
    return reg.test(str)
}
var str = 'abcde';
console.log(isHaveNumber(str))