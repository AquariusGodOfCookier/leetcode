// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
// 示例 1:
// 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出: 8
// 解释: 能够达到的最大利润:  
// 在此处买入 prices[0] = 1
// 在此处卖出 prices[3] = 8
// 在此处买入 prices[4] = 4
// 在此处卖出 prices[5] = 9
// 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
/**
 * @author dong.sun
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 假设dp[i][0]为第i天不持有股票的利润，不持有股票可能有两种情况，
//第一种是第i-1天就不持有股票，第i天延续下来，
//第二种情况就是第i-1天持有股票，第i天卖出股票 dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
// 假设dp[i][1]为第i天持有股票的利润，持有股票可能有两种情况
// 第一种是第i-1天就持有股票，第i天我没卖
// 第二种是第i-1天不持有股票，第i天我买入一个股票 dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
// 我买入股票需要花钱，因为买股票一定在手中没股票的情况下，所以花的钱就应该是不持有股票时手中的钱，为dp[i-1][0]-prices[i]
// 如果我第一天买入股票，钱数为0-prices[0],第一天手中没股票，一定没法卖出 0
var maxProfit = function (prices, fee) {
    let dp = new Array();
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(); // 初始化一个二维数组
    }
    dp[0][0] = 0;
    dp[0][1] = 0 - prices[0];
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length-1][0];

};
// 优化，不使用数组，使用状态
var maxProfit = function (prices, fee) {
    let hold = 0-prices[0]; // 持有股票的最大利润
    let cash = 0; // 不持有股票时的最大利润，卖出时的最大利润
    // 这一天我有三种选择，我要不要卖，卖了我手里能剩多少钱，我要不要买，买了我手里能剩多少钱，卖只能在买之后，我什么也不干，既不买入也不卖出
    for(let i=1;i<prices.length;i++){
        cash = Math.max(cash,hold+prices[i]-fee); //对于这一天，我可以选择不卖出(cash),也可以选择卖出(hold+prices[i]-fee)
        hold = Math.max(hold,cash-prices[i]);      //对于这一天，我可以选择不买入(hold),也可以选择买入(cash-prices[i]);
        // 一定是先卖再买，否则对于这一天我买入又卖入，肯定是赔钱的，不赚反而搭了手续费
    }
    return cash;
};
var prices = [1, 3, 2, 8, 4, 9], fee = 2;
console.log(maxProfit(prices, fee));