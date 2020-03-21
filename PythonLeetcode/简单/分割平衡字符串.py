# 分割平衡字符串
# 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

# 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

# 返回可以通过分割得到的平衡字符串的最大数量。
class Solution(object):
    def balancedStringSplit(self, s):
        """
        :type s: str
        :rtype: int
        """
        count = 0
        sums = 0
        for key in s:
            if key == 'L':
                count -= 1
            elif key == 'R':
                count += 1
            if count == 0:
                sums += 1
        return sums

s = 'RLRRLLRLRL'
print(Solution().balancedStringSplit(s))