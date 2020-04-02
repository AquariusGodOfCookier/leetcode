// 验证身份证号码

var isIndentifyCard = function(str){
    var reg = /(^\d{15}$)| (^\d{18}$) |(^\d{17}(\d|X|x)$)/;
    return reg.test(str);
}
// 身份证分为15或18位，15位全数字，18位前17位都是数字，最后一位可能是数字或X
var str = "2302311996082043";
console.log(isIndentifyCard(str));