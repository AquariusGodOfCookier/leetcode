/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let left = 0;
    let right = S.length;
    let list = [];
    for(let i=0;i<=S.length;i++){
        if(S[i]=='I'){
            list.push(left);
            left++;
        }else if (S[i]=='D'){
            list.push(right);
            right--;
        }else{
            list.push(left)
        }
    }
    return list;
};

var s = 'DDI';
console.log(diStringMatch(s));