/**
 * @param {string} s
 * @return {string}
 */
// a e i o u
var reverseVowels = function (s) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0;
    s = s.split('');
    let right = s.length - 1;
    while (left <= right) {
        if (vowel.indexOf(s[left]) == -1) {
            left += 1;
        }
        if (vowel.indexOf(s[right]) == -1) {
            right -= 1;
        }
        if (vowel.indexOf(s[left]) != -1 && vowel.indexOf(s[right]) != -1 &&left<=right) {
            // 我不明白为什么前面都已经while(left<=right)了，如果这里不加个判断的话，left比right大的时候还是会进来，不会跳出去，不懂为嘛
            let temp = '';
            temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left+=1;
            right-=1;
        }
    }
     return s.join('');
};

var s = "race a car";
console.log(reverseVowels(s));