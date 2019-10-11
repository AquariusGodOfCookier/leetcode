/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var haystack = 'mississippi';
var needle = 'iss';

var next = function (needle) {
    let perfix = [];
    let suffix = [];
    let partMatch = [];
    for (let i = 0; i < needle.length; i++) {
        let substr = needle.substring(0, i + 1);
        if(substr.length==1){
            partMatch[i]=0;
        }else{
            for(let k=0;k<i;k++){
                //取前缀
                perfix[k] = substr.slice(0,k+1);
                suffix[k] = substr.slice(-k-1);
                if(perfix[k]==suffix[k]){
                    partMatch[i] = perfix[k].length;
                }
            }
            if(!partMatch[i]){
                partMatch[i]=0;
            }

        }
    }
    return partMatch;
}

var KMPStr = function (haystack, needle) {
    if (needle == '') {
        return -1;
    }
    let nextMatch= next(needle);
    let hlength = haystack.length;
    let nlength = needle.length;
    let res = [];
    let j=0;
    let i=0;
    while(i<hlength-nlength){
        if(haystack[i]===needle[j]){
            i++;
            j++;
            if(j==nlength){
                res.push(i-nlength);
                j = nextMatch[j-1]+1;
            }
        }else{
            if(j==0){
                i++;
            }else{
                j = nextMatch[j-1]+1;
            }
        }
    }
    return res;
};

console.log(KMPStr(haystack, needle));