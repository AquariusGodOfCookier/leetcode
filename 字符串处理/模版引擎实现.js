let template = `我是{{name}},年龄{{age}}`;
let data = {
    name:'孙东',
    age:'18'
}

var render = function(template,data){
    let reg = /\{\{(\w+)\}\}/;
    if(reg.test(template)){ // 用正则表达式匹配{{name}}
        const [str,name] = reg.exec(template);
        template = template.replace(str,data[name]);
        return render(template,data);
    }
    return template;
}
console.log(render(template,data));