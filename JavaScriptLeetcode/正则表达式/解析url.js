// var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
// var url = "http://qiji123.kerlai.net:81/GoodsBasic/Operate/12678?q#simen";
// var result = parse_url.exec(url);
// var names = ["url","scheme","slash","host","port","path","query","hash"];
// for(var i=0; i <names.length;i++){
//     console.log(names[i]+":"+result[i]);
// }
var analyUrl = function(url){
    let url_pattern = /^(?:([A-Za-z]+):)?(\/{2})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    var result = url_pattern.exec(url)
    console.log(result)
}
var url = "http://qiji123.kerlai.net:81/GoodsBasic/Operate/12678?q#simen";
console.log(analyUrl(url))