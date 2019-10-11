/**
 * @param {String} Url
 * @return {Object}
 */

 var parseParam = function(url){
    const parseStr = /.+\?(.+)$/.exec(url)[1]; //正则表达式把?后面的内容取出来
    const parseList = parseStr.split('&');
    let params = {};
    parseList.forEach((param)=>{
        if(/=/.test(param)){ //如果是有key=value
            let [key,value] = param.split('=');
            // 对value可能需要解码
            value = decodeURIComponent(value);
            value = /^\d+$/.test(value)?parseFloat(value):value;
            if(params.hasOwnProperty(key)){
                params[key] = [].concat(params[key],value)
            }else{
                params[key] = value;
            }
        }else{
            params[param] = true;
        }
    })
    return params;
    console.log(parseList)
 }

 var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=12&city=%E5%8C%97%E4%BA%AC&enabled';
 console.log(parseParam(url));
 /**
{ user: 'anonymous',
  id: [ 123, 456, 12 ],
  city: '北京',
  enabled: true }
  */