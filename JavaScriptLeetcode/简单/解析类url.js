

function transparams(which, params) {
  var url = '/api/city/experience/city/opGroupManage?page=1&per_page=20&id=1';
  let query = url.split('?')[1].split('&');
  let retain = url.split('?')[0];
  let dic = new Array();
  query.forEach(item=>{
    let key = item.split('=')[0];
    let value = item.split('=')[1];
    if(key == which){
      value = params
    }
    dic[key]=value;
  })
  let arrays =[];
  for(let item in dic){
    let array=item+'='+dic[item]
    arrays.push(array)
  }
  return retain+'?'+arrays.join('&')
}

console.log(transparams('per_page', 3))