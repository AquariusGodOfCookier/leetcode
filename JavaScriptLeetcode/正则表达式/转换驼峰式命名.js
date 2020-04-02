var changeName = function(name){
    let reg = /-\w/g
    name = name.replace(reg,(item)=>{
        return item.slice(1).toUpperCase();
    })
    return name
}

var name = "get-element-by-name";
console.log(changeName(name))