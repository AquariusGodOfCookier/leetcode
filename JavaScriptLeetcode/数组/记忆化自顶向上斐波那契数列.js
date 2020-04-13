// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。


/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N <= 1) {
        return N;
    }
    let cache = new Array(N+1);
    cache[0] = 0;
    cache[1] = 1;
    return memorize(N,cache)
};
var memorize = function (N,cache) {
    if(cache[N] != null){
        return cache[N];
    }
    cache[N] = memorize(N-1,cache)+memorize(N-2,cache);
    return memorize(N,cache);
}
var N = 4;
console.log(fib(N));