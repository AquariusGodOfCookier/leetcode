
var nationalFlag = function(height){
    let list = new Array(height.length).fill(0);
    let distance = 0;
    for(let i=0;i<height.length;i++){
        for(let j=0;j<i;j++){
            if(height[j]>height[i]){
                distance = Math.abs(j-i)
            }
        }
        list[i] = distance;
        distance = 0;
    }
    return list
}
var height = [175,173,174,163,182,177];
console.log(nationalFlag(height))