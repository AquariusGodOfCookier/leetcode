
/**
 * @param {String} name
 * @return {String}
 */

 var nameToUpperCase = function(name){
    let reg = /-\w/g;
    return name.replace(reg,(item)=>{
        return item.slice(1).toUpperCase();
    })
 }
 var name = "get-element-by-id";
 console.log(nameToUpperCase(name));