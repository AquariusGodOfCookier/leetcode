function add(n){
    var num = n;
    return function addTo(x){
        return x + num
    }
}
var addTwo = add(2)
console.log(addTwo)