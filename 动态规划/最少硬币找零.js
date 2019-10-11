/**
 * @param {Array} coins 硬币种类数组
 * @param {Number} amount 需要组合成的数列
 * @return {Array}  
 */

 var minCoinChange = function(coins,amount){
     const cache = [];
     const makeChange = (value)=>{
         if(value<0){
             return [];
         }
         if(cache[value]){
             return cache[value];
         }
         let min = [];
         let newMin;
         let newAmount;
         for(let i=0;i<coins.length;i++){
             const coin = coins[i];
             newAmount = value - coin;
             if(newAmount >= 0){
                 newMin = makeChange(newAmount);
             }
             if(newAmount>=0 && (newMin.length<min.length-1 || !min.length) && (newMin.length || !newAmount)){
                 min = [coin].concat(newMin);
                 console.log('new Min '+min+' for '+amount);
             }
         }
         return (cache[value] = min);
     }
     return makeChange(amount);
 }
 var coins = [1,5,10,50,100];
 var amount = 76;
 console.log(minCoinChange(coins,amount))