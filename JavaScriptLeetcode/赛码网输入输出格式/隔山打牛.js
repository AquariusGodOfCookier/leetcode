// “你可曾听闻一招从天而降大掌法？”
//   在一部游戏中有这样一个技能，假设地图是一条直线，长度为n，人物所处的位置是x，则可以对x，2*x和2*x+1三格内的敌人分别造成一点伤害，要求2*x+1<=n。

//   设为这个地图的格子做标记为1-n，第i个格子中有一个血量为a_i的敌人。请问你至少使用多少次技能，可以杀死这个地图上所有敌人。

// 输入
// 输入第一行包含一个正整数n,表示格子的数量(1<=n<=100)

// 输入第二行包含n个正整数a_i,表示第i个格子中敌人的血量。

// 输出
// 输出仅包含一个正整数，即至少使用多少次技能。
// 样例输入
// 5
// 1 2 3 4 5

var kill = function(n,arr){
    let arrs = {}; //key为索引
    let index= 1;
    arr.unshift(0);
    while((2*index)+1<=arr.length){
        let target = arr[index];
        let target2 = arr[2*index];
        let target3 = arr[(2*index)+1];
        if(target>target2 && target>target3){
            arrs[index] = target;
        }else if(target2>target && target2>target3){
            arrs[2*index] = target2;
        }else if(target3>target && target3>target2){
            arrs[2*index+1] = target3;
        }
        index++;
    }
    let count = 0;

    console.log(arrs);
}
var arr = [1,10,3,4,5];
console.log(kill(5,arr));