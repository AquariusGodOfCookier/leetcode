// ip地址无效化
// 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

// 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(new RegExp(/\./,"g"),'[.]');
};
var address = "255.100.50.0";
console.log(defangIPaddr(address))