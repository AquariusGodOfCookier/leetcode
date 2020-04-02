var matcha = function(str){
    var reg = /<a[^>]+>/g;
    return str.match(reg)
}
var str = "aaaa<a href = 'www.baidu.com'>dddd";
console.log(matcha(str));