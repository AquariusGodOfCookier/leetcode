// 验证邮箱
var isMobile = function(str){
    //var reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zS-Z0-9_-]+)$/
    return  reg.test(str)
}
var isQQMobile = function(str){
    var reg = /^([0-9]+)@qq.com/
    return reg.test(str)
}
var str = '24435724@qq.com';
console.log(isQQMobile(str));