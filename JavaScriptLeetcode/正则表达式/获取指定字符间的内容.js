var getStr = function (str) {
    var reg = /\$\{(.+?)\}/
    var reg_g = /\$\{(.+?)\}/g
    var result = str.match(reg_g)
    var list = []
    for (var i = 0; i < result.length; i++) {
        var item = result[i]
        list.push(item.match(reg)[1])
    }
    return list
}
var getStrExce = function (str) {
    var reg = /\$\{(.+?)\}/g
    var list = []
    var result = null
    do {
        result = reg.exec(str)
        result && list.push(result[1])
        console.log(result,list)
    } while (result)
    console.log(result)
    return list
}
var str = '124fddr323532${xxxasdsafxx}253${bnm}23354${abcd}233545xx54${666}233545xxxxx';
// console.log(getStr(str))
console.log(getStrExce(str))