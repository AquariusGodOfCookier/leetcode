// 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
// 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。
// 示例:
// 输入:
// letters = ["c", "f", "j"]
// target = "a"
// 输出: "c"

// 输入:
// letters = ["c", "f", "j"]
// target = "c"
// 输出: "f"

// 输入:
// letters = ["c", "f", "j"]
// target = "d"
// 输出: "f"

// 输入:
// letters = ["c", "f", "j"]
// target = "g"
// 输出: "j"

// 输入:
// letters = ["c", "f", "j"]
// target = "j"
// 输出: "c"

// 输入:
// letters = ["c", "f", "j"]
// target = "k"
// 输出: "c"
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetter = function(letters, target) {
//     // 因为是升序数组，如果最后一位都比目标字母小，则返回第一位
//     if(letters[letters.length-1]<=target){
//         return letters[0];
//     }
//     for(let i=0;i<letters.length;i++){
//         if(letters[i]>target){
//             return letters[i];
//         }
//     }
// };
var nextGreatestLetter = function(letters, target) {
    // 二分法优化，因为是有序数组，使用二分法
    let left = 1;
    let right = letters.length-1;
    if(letters[0]>target || letters[right]<=target){
        return letters[0];
    }
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(letters[mid]<=target){
            left = mid+1;
        }else{
            if(letters[mid-1]<=target){
                return letters[mid];
            }else{
                right = mid-1;
            }
        }
    }
};
var letters = ["e","e","e","e","e","e","n","n","n","n"];
var target = 'e';
console.log(nextGreatestLetter(letters,target));