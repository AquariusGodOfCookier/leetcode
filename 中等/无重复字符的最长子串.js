/**
 * @param {string} s
 * @return {number}
 */

 var s = 'pwwkew';

 var lengthOfLongesSubstring = function (s) { 
    let strSet = new Set();
    let strMap = new Map();
    let index = 0;
    let str = '';
    for(var i=index;i<s.length;i++){
        if(strSet.has(s[i])){
            strSet.forEach(item=>{
                str += item;
            })
            index += str.length;
            strMap.set(str,str.length);
            str = '';
            strSet.clear();
            break;
        }else{
            strSet.add(s[i]);
        }
    }
    console.log(strMap);
}


lengthOfLongesSubstring(s);