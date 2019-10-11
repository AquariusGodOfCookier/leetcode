
function isPhone(string){
    var myreg = /^[1][3,4,5,8,7][0-9]{9}$/;
    if(!myreg.test(string)){
        console.log('no phone')
    }else{
        console.log('is phone')
    }


}



isPhone('189046085307')