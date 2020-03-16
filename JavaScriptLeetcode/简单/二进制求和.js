/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let length = Math.max(a.length,b.length);
    let sum = 0;
    let ans = '';
    a = preFixInt(a,length);
    b = preFixInt(b,length);
    console.log(a,b)
};
var preFixInt= function (str,length){
    if(str.length==length){
        return str;
    }else{
        return str.padStart(parseInt(length-str.length),'0')
    }
}
var a = '11',b='1';
addBinary(a,b);
