// 过滤html标签
var noHtml = function(str){
    var reg = /<[^<>]+>/g;
    return str.replace(reg,'')
    console.log(str)
}
var str = "a<p>dasdsa</p>nice <br> test</br>";
console.log(noHtml(str));