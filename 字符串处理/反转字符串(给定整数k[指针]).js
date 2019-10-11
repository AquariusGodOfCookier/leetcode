/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let left = 0;
    let right = 0;
    let k2 = 2 * k, k1 = k;
    if (s.length >= k2 || (s.length < k2 && s.length >= k1)) {
        right = k1-1;
    } else {
        right = s.length-1;
    }
    let arr = s.split('');
    let count = 0;
    while (left<=arr.length) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
        if(left>=right){
            count +=1;
            left =  count*k2;
            right = left + k1-1;
            if(right>=arr.length-1){
                right = arr.length-1;
            }
        }
    }
    return arr.join('');
};
var s = 'abcdefgh';
var k = 9;
console.log(reverseStr(s, k));